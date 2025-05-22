// frontend/app/blog/[slug]/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import NotificationTrigger from '@/components/NotificationTrigger'

type Props = {
  params: {
    slug: string
  }
}

const query = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    content,
    "author": author->name,
    "category": category->title,
    coverImage {
      asset -> {
        url
      }
    }
  }
`

export default async function BlogPostDetailPage({ params }: Props) {
  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) return notFound()

  return (
    <main className="text-white px-4 py-12 max-w-3xl mx-auto">
      {/* Trigger centralized notification */}
      <NotificationTrigger title={post.title} slug={params.slug} />

      {/* Cover image */}
      {post.coverImage?.asset?.url && (
        <Image
          src={post.coverImage.asset.url}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full rounded-lg mb-6"
        />
      )}

      {/* Title & metadata */}
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        By {post.author} — {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Content body */}
      <div className="prose prose-invert max-w-none">
        <PortableText value={post.content} />
      </div>
    </main>
  )
}
