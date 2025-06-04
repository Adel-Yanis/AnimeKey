'use client';

import { useEffect, useState } from 'react';
import NotificationCard from '../../components/NotificationCard';
import { getSystemNotifications, markAllAsRead } from '../../lib/notifications';
import type { Notification } from '../../lib/types';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const systemNotifs = getSystemNotifications();
    setNotifications(systemNotifs);
    markAllAsRead(); // only marks system notifications as read
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-animekey-green mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-sm text-gray-400">You have no notifications yet.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} {...notification} />
          ))}
        </div>
      )}
    </div>
  );
}
