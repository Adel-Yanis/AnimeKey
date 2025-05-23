// frontend/components/EventCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

type EventPost = {
  title: string
  slug: {
    current: string
  }
  coverImage?: {
    asset: {
      url: string
    }
  }
  date: string
}

export default function EventCard({ post }: { post: EventPost }) {
  return (
    <Link href={`/events/${post.slug.current}`}>
      <div className="bg-zinc-900 border border-animekey-green rounded-lg overflow-hidden hover:shadow-lg transition">
        {post.coverImage?.asset?.url && (
          <Image
            src={post.coverImage.asset.url}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1">{post.title}</h3>
          <p className="text-sm text-gray-400">Date: {post.date}</p>
        </div>
      </div>
    </Link>
  )
}
