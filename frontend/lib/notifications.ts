type NotificationEntry = {
  id: string
  type: string
  message: string
  url: string
  timestamp: string
  read: boolean
  icon?: string
}

let notifications: NotificationEntry[] = []

export function logNotification(
  type: string,
  message: string,
  url: string,
  icon: string = '🔔'
) {
  const entry: NotificationEntry = {
    id: Date.now().toString(),
    type,
    message,
    url,
    timestamp: new Date().toLocaleString(),
    read: false,
    icon,
  }

  notifications.unshift(entry)
}

export function getNotifications() {
  return notifications
}
