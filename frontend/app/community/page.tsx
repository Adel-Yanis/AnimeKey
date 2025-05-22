import { getCommunityPosts } from '@/lib/queries'
import CommunityCard from '@/components/CommunityCard'
import ClientNotificationTrigger from '@/components/ClientNotificationTrigger'

export default async function CommunityPage() {
  const posts = await getCommunityPosts()

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Community</h1>
      <p className="text-sm text-gray-400 mb-8">
        Dive into fan discussions, theories, polls, and more.
      </p>

      <ClientNotificationTrigger
        title={posts[0]?.title || 'New Community Post'}
        slug={posts[0]?.slug?.current || ''}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <CommunityCard key={post.slug.current} post={post} />
        ))}
      </div>
    </main>
  )
}
