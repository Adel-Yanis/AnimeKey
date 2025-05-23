// frontend/lib/notifications.ts

interface Notification {
  id: string;
  type: string;
  message: string;
  url: string;
  timestamp: string;
  read: boolean;
  icon: string;
}

export function logNotification(
  type: string,
  message: string,
  url: string,
  icon = '🔔'
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

  const existing = JSON.parse(localStorage.getItem('animekey-notifications') || '[]');
  localStorage.setItem('animekey-notifications', JSON.stringify([notification, ...existing]));
}

export function getNotifications(): Notification[] {
  return JSON.parse(localStorage.getItem('animekey-notifications') || '[]');
}
