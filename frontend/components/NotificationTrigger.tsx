'use client'

import { useEffect } from 'react'
import { notifyBlogPost } from '@/lib/notify'

type NotificationTriggerProps = {
  title: string
  slug: string
}

export default function NotificationTrigger({ title, slug }: NotificationTriggerProps) {
  useEffect(() => {
    notifyBlogPost(title, slug)
  }, [title, slug])

  return null
}
