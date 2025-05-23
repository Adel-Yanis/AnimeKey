// frontend/components/LoreCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

type LorePost = {
  _id: string
  title: string
  slug: {
    current: string
  }
  coverImage?: {
    asset: {
      url: string
    }
  }
  category?: string
}

export default function LoreCard({ post }: { post: LorePost }) {
  return (
    <Link href={`/lore/${post.slug.current}`}>
      <div className="border border-animekey-green rounded-lg overflow-hidden hover:shadow-lg transition duration-150">
        {/* Cover image */}
        {post.coverImage?.asset?.url && (
          <Image
            src={post.coverImage.asset.url}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-t-lg"
          />
        )}

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-animekey-green mb-1">{post.category}</p>

          {/* Title */}
          <h3 className="text-base font-bold text-white">{post.title}</h3>
        </div>
      </div>
    </Link>
  )
}
