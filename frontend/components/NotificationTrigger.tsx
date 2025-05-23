// frontend/components/NotificationTrigger.tsx

'use client';

import { useEffect } from 'react';
import { notifyBlogPost, notifyEvent, notifyLore, notifySpotlight, notifyCommunityPost } from '../lib/notify';

type NotificationTriggerProps = {
  type: 'blog' | 'event' | 'lore' | 'spotlight' | 'community';
  message: string;
  url: string;
};

export default function NotificationTrigger({ type, message, url }: NotificationTriggerProps) {
  useEffect(() => {
    switch (type) {
      case 'blog':
        notifyBlogPost(message, url);
        break;
      case 'event':
        notifyEvent(message, url);
        break;
      case 'lore':
        notifyLore(message, url);
        break;
      case 'spotlight':
        notifySpotlight(message, url);
        break;
      case 'community':
        notifyCommunityPost(message, url);
        break;
      default:
        console.warn('Unknown notification type:', type);
    }
  }, [type, message, url]);

  return null;
}
