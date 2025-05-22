// frontend/app/page.tsx
import TopBanner from '@/components/TopBanner'
import { getTopPost } from '@/lib/queries'

export default async function HomePage() {
  const topPost = await getTopPost()

  return (
    <main className="text-white px-4 md:px-8">
      <TopBanner post={topPost} />

      <section className="py-12">
        <h2 className="text-xl font-semibold mb-6">Trending Lore</h2>
        <div className="text-gray-400">[Coming soon]</div>
      </section>

      <section className="py-12">
        <h2 className="text-xl font-semibold mb-6">Creator Spotlights</h2>
        <div className="text-gray-400">[Coming soon]</div>
      </section>
    </main>
  )
}
