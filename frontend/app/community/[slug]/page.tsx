// frontend/app/community/[slug]/page.tsx
import { getCommunityPostBySlug } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

export default async function CommunityDetailPage({ params }: Params) {
  const post = await getCommunityPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        By {post.username} · Type: {post.type}
      </p>

      <div className="prose prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}
