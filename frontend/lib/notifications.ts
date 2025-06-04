import { Notification } from './types';
import { saveToStorage, loadFromStorage } from './storage';

const STORAGE_KEY = 'animekey-notifications';

/**
 * Logs a new notification entry to localStorage.
 * @param type 'system' for CMS-triggered / alerts. 'activity' for user tracking (private).
 * @param message Display message content.
 * @param url Route to link when clicked.
 * @param icon Optional emoji/icon string.
 */
export function logNotification(
  type: 'system' | 'activity',
  message: string,
  url: string,
  icon = '🟡'
): void {
  const notification: Notification = {
    id: Date.now().toString(),
    type,
    message,
    url,
    timestamp: new Date().toLocaleString(),
    read: false,
    icon
  };

  const existing = getNotifications();
  saveToStorage(STORAGE_KEY, [notification, ...existing]);
}

/**
 * Retrieves all stored notifications.
 */
export function getNotifications(): Notification[] {
  return loadFromStorage<Notification[]>(STORAGE_KEY) || [];
}

/**
 * Retrieves only system notifications (e.g. public alerts).
 */
export function getSystemNotifications(): Notification[] {
  return getNotifications().filter(n => n.type === 'system');
}

/**
 * Marks all system notifications as read.
 */
export function markAllAsRead(): void {
  const updated = getNotifications().map(n =>
    n.type === 'system' ? { ...n, read: true } : n
  );
  saveToStorage(STORAGE_KEY, updated);
}
