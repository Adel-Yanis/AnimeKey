'use client'

import Link from 'next/link'
import Image from 'next/image'

type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  coverImage?: { asset: { url: string } }
  author: string
  category: string
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="border border-animekey-green rounded-lg mb-4 hover:bg-[#1a1a1a] transition duration-150">
        {/* Cover image */}
        {post.coverImage?.asset?.url && (
          <Image
            src={post.coverImage.asset.url}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-2"
          />
        )}

        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-animekey-green mb-1">{post.category}</p>

          {/* Title */}
          <h3 className="text-base font-bold text-white">{post.title}</h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-300 mt-1">{post.excerpt}</p>

          {/* Author & Date */}
          <p className="text-xs text-gray-500 mt-2">
            By {post.author} — {new Date(post.publishedAt).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </Link>
  )
}
