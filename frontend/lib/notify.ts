// frontend/lib/notify.ts

import { logNotification } from './notifications'

export const notifyBlogPost = (message: string, url: string) => {
  logNotification('blog', message, url);
};

export const notifyEvent = (message: string, url: string) => {
  logNotification('event', message, url);
};

export const notifyLore = (message: string, url: string) => {
  logNotification('lore', message, url);
};

export const notifySpotlight = (message: string, url: string) => {
  logNotification('spotlight', message, url);
};

export const notifyCommunityPost = (message: string, url: string) => {
  logNotification('community', message, url);
};
