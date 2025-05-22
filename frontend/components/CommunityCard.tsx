// frontend/components/CommunityCard.tsx
'use client'

import Link from 'next/link'

export default function CommunityCard({ post }: { post: any }) {
  return (
    <Link href={`/community/${post.slug.current}`}>
      <div className="bg-zinc-900 border border-animekey-green rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1">{post.title}</h3>
          <p className="text-sm text-gray-400 mb-2">By: {post.username}</p>
          <span className="text-xs text-animekey-green uppercase tracking-wide">
            {post.type}
          </span>
        </div>
      </div>
    </Link>
  )
}
