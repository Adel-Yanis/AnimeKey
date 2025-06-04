'use client';

import { useEffect, useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { getNotifications } from '../lib/notifications';

export default function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const all = getNotifications();
    const unread = all.filter(n => !n.read).length;
    setUnreadCount(unread);
  }, []);

  const isUnread = unreadCount > 0;
  const glowClass = isUnread ? 'animate-pulse text-yellow-400' : 'text-white';

  const handleClick = () => {
    router.push('/notifications');
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <BellIcon className={`h-6 w-6 ${glowClass}`} />
      {isUnread && (
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {unreadCount}
        </span>
      )}
    </div>
  );
}
