'use client'

import Link from 'next/link'

type NotificationCardProps = {
  message: string;
  url: string;
  timestamp: string;
  read: boolean;
  icon?: string; // <-- mark as optional
}


export default function NotificationCard({
  message,
  url,
  timestamp,
  read,
  icon,
}: NotificationCardProps) {
  return (
    <Link href={url}>
      <div
        className={`border border-animekey-green p-4 rounded-lg mb-4 hover:bg-[#1a1a1a] transition duration-150 ${
          read ? 'opacity-60' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <div className="flex-1">
            <p className="text-sm">{message}</p>
            <p className="text-xs text-gray-400 mt-1">{timestamp}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
