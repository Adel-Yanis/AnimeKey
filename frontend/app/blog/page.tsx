// frontend/app/blog/page.tsx
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity.client'
import BlogPostCard from '@/components/BlogPostCard'
import NotificationTrigger from '@/components/NotificationTrigger'

const blogQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage { asset->{url} },
    "author": author->name,
    "category": category->title
  }
`

export default async function BlogPage() {
  const posts = await sanityClient.fetch(blogQuery)

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Latest Blog Posts</h1>
      <p className="text-sm text-gray-400 mb-8">
        Our latest blog updates, insights, and editorial content.
      </p>

      {/* ✅ Client-side notification trigger */}
      <ClientNotificationTrigger latest={posts[0]} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}

// ✅ CLIENT COMPONENT
function ClientNotificationTrigger({ latest }: { latest: any }) {
  'use client'
  if (!latest) return null
  return <NotificationTrigger title={latest.title} slug={latest.slug.current} />
}
