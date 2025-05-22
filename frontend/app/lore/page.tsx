import { getLorePosts } from '@/lib/queries'
import LoreCard from '@/components/LoreCard'
import ClientNotificationTrigger from '@/components/ClientNotificationTrigger'

export default async function LorePage() {
  const loreItems = await getLorePosts()

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-2">Lore Section</h1>
      <p className="text-sm text-gray-400 mb-8">
        Explore deep dives into anime worlds, characters, and timelines.
      </p>

      <ClientNotificationTrigger
        title={loreItems[0]?.title || 'New Lore Entry'}
        slug={loreItems[0]?.slug?.current || ''}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loreItems.map((lore: any) => (
          <LoreCard key={lore._id} lore={lore} />
        ))}
      </div>
    </main>
  )
}
