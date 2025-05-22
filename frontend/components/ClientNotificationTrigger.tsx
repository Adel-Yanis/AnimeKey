'use client'

import NotificationTrigger from './NotificationTrigger'

export default function ClientNotificationTrigger({
  title,
  slug,
}: {
  title: string
  slug: string
}) {
  return <NotificationTrigger title={title} slug={slug} />
}
