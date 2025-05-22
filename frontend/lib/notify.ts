'use client'

import { logNotification } from './notifications'

// Blog Posts
export function notifyBlogPost(title: string, slug: string) {
  logNotification('blog', `📝 ${title}`, `/blog/${slug}`, '📝')
}

// Lore Entries
export function notifyLorePost(title: string, slug: string) {
  logNotification('lore', `📜 ${title}`, `/lore/${slug}`, '📜')
}

// Creator Spotlight
export function notifySpotlight(title: string, slug: string) {
  logNotification('spotlight', `🎤 ${title}`, `/spotlight/${slug}`, '🎤')
}

// Events
export function notifyEvent(title: string) {
  logNotification('event', `🎉 A new event has just been published: ${title}`, `/events`, '🎉')
}

// Community Posts
export function notifyCommunityPost(title: string, slug: string) {
  logNotification('community', `💬 ${title}`, `/community/${slug}`, '💬')
}
