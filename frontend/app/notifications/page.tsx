// frontend/app/notifications/page.tsx
"use client";

import NotificationCard from "../../components/NotificationCard";
import { getNotifications } from "../../lib/notifications";
import type { Notification } from "../../lib/types";

export default function NotificationsPage() {
  const notifications = getNotifications();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-animekey-green mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-sm text-gray-400">You have no notifications yet.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification: Notification) => (
            <NotificationCard key={notification.id} {...notification} />
          ))}
        </div>
      )}
    </div>
  );
}
