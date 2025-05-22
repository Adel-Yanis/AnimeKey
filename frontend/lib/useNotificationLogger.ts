'use client'

import { logNotification } from './notifications'

export default function useNotificationLogger() {
  const log = (
    type: string,
    message: string,
    url: string,
    icon: string
  ) => {
    logNotification(type, message, url, icon)
  }

  return { log }
}
