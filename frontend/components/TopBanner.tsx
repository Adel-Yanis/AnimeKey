// components/TopBanner.tsx
import React from 'react'

type TopBannerProps = {
  post?: {
    title: string
    slug?: {
      current: string
    }
    mainImage?: {
      asset?: {
        url?: string
      }
    }
  }
}

export default function TopBanner({ post }: TopBannerProps) {
  if (!post || !post.slug?.current) {
    return null
  }

  const href = `/post/${post.slug.current}`

  return (
    <section className="relative w-full h-[400px] rounded-lg overflow-hidden mb-10 border border-animekey-green">
      <a
        href={href}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold z-10"
      >
        {post.title || 'Featured Post'}
      </a>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title || 'Featured Banner'}
          className="w-full h-full object-cover"
        />
      )}
    </section>
  )
}
