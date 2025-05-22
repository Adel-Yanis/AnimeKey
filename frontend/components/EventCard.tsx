// components/EventCard.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type EventCardProps = {
  title: string
  slug: string
  image: string
  date: string
  location: string
  ticketUrl?: string
}

export default function EventCard({ title, slug, image, date, location, ticketUrl }: EventCardProps) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(date).getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference <= 0) {
        setTimeLeft('Event Started')
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)

      setTimeLeft(`${days}d ${hours}h ${minutes}m`)
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{new Date(date).toLocaleString()} — {location}</p>
        <p className="text-green-400 mt-2 text-sm">⏳ {timeLeft}</p>
        <div className="mt-3 flex gap-2">
          <Link href={`/events/${slug}`}>
            <button className="px-3 py-1 text-sm bg-animekey-green text-black rounded hover:brightness-110">View Event</button>
          </Link>
          {ticketUrl && (
            <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-3 py-1 text-sm bg-white text-black rounded hover:brightness-110">Buy Ticket</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
