'use client'

import { useState, useEffect, useRef } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Notification = {
  id: number
  type: string
  message: string
  url: string
  seen: boolean
}

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('animekey-notifications')
    const parsed: Notification[] = stored ? JSON.parse(stored) : []
    setNotifications(parsed)
    setUnreadCount(parsed.filter((n) => !n.seen).length)
  }, [open])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, seen: true }))
    localStorage.setItem('animekey-notifications', JSON.stringify(updated))
    setNotifications(updated)
    setUnreadCount(0)
  }

  const latest = notifications.length > 0 ? notifications[0] : null

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen(!open)
          markAllAsRead()
        }}
        className={`p-2 hover:text-animekey-green transition ${
          unreadCount > 0 ? 'text-yellow-400' : 'text-white'
        }`}
      >
        <BellIcon className="w-6 h-6" />
      </button>

      {open && latest && (
        <div className="absolute right-0 mt-2 w-80 bg-[#111] border border-animekey-green text-white rounded-lg shadow-lg p-4 speech-bubble z-50">
          <div className="text-sm">
            <p className="font-semibold mb-1">📢 Latest Notification</p>
            <Link href={latest.url} className="text-animekey-green hover:underline block mb-2">
              {latest.message}
            </Link>
            <button
              onClick={() => router.push('/notifications')}
              className="text-xs text-gray-400 hover:text-animekey-green"
            >
              View All →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
