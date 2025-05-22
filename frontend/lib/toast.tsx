'use client'

import toast from 'react-hot-toast'
import Link from 'next/link'
import { logNotification } from '@/lib/notifications'

export const showNewEventToast = () => {
  toast.custom((t) => (
    <div
      className={`bg-[#111] text-white border border-animekey-green rounded-lg p-5 w-[90%] max-w-md mx-auto shadow-xl
        flex flex-col gap-3 text-center z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        ${t.visible ? 'animate-enter' : 'animate-leave'}`}
    >
      {/* Dismiss Button */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="absolute top-2 right-3 text-gray-400 hover:text-white text-lg"
      >
        ✕
      </button>

      {/* Title and Text */}
      <h3 className="text-xl font-bold text-animekey-green">🎉 New Event!</h3>
      <p className="text-sm text-gray-300">
        A new event has just been published. Don’t miss it!
      </p>

      {/* Link Button */}
      <Link href="/events">
        <div className="mt-2 inline-block px-4 py-2 bg-animekey-green text-black font-semibold rounded hover:brightness-110 cursor-pointer">
          View Events
        </div>
      </Link>
    </div>
  ), { duration: Infinity })

  // ✅ Log after showing
  logNotification('event', '🎉 A new event has just been published! Don’t miss it!', '/events')
}
