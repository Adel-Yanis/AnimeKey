// frontend/components/NotificationBell.tsx
'use client'

import { useState } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

export default function NotificationBell() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [unreadCount, setUnreadCount] = useState<number>(3)


  return (
    <div className="relative cursor-pointer">
      <BellIcon className="h-6 w-6 text-white" />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {unreadCount}
        </span>
      )}
    </div>
  )
}
