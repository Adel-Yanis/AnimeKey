'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NotificationBell from './NotificationBell'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div
      className={`${
        isExpanded ? 'w-64' : 'w-16'
      } transition-all duration-300 bg-[#111] text-white min-h-screen flex flex-col justify-between`}
    >
      <div className="p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-white.png"
            alt="AnimeKey Logo"
            width={isExpanded ? 40 : 28}
            height={40}
            priority
          />
          {isExpanded && (
            <span className="text-animekey-green text-xl font-bold tracking-tight">
              AnimeKey
            </span>
          )}
        </Link>

        <nav className="mt-6 flex flex-col space-y-2 text-sm">
          <Link href="/blog">Blog</Link>
          <Link href="/lore">Lore</Link>
          <Link href="/spotlight">Creator’s Spotlight</Link>
          <Link href="/community">Community</Link>
          <Link href="/events">Events</Link>
          <Link href="/search">Search</Link>

          {/* Notification Bell */}
          <div className="pt-4">
            <NotificationBell />
          </div>
        </nav>
      </div>

      <div className="p-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-gray-400 hover:text-white"
        >
          {isExpanded ? '< Collapse' : '> Expand'}
        </button>
      </div>
    </div>
  )
}
