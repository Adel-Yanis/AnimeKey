// frontend/app/post/[slug]/page.tsx
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity.client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

const query = groq`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset-> {
        url
      }
    },
    excerpt,
    body,
    "author": author->name,
    "category": category->title
  }
`

export default async function PostPage({ params }: Params) {
  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(post.publishedAt).toLocaleDateString()} · By {post.author} · Category: {post.category}
      </p>

      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      <div className="prose prose-invert max-w-none">
        <PortableText value={post.body as import('@portabletext/types').TypedObject[]} />
      </div>
    </article>
  )
}
