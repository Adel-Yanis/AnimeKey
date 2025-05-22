import { getSpotlights } from '@/lib/queries'
import SpotlightCard from '@/components/SpotlightCard'
import ClientNotificationTrigger from '@/components/ClientNotificationTrigger'

export default async function SpotlightPage() {
  const spotlights = await getSpotlights()

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Creator Spotlights</h1>
      <p className="text-sm text-gray-400 mb-8">
        Discover the brilliant minds shaping the anime world.
      </p>

      <ClientNotificationTrigger
        title={spotlights[0]?.name || 'New Spotlight'}
        slug={spotlights[0]?.slug?.current || ''}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spotlights.map((spotlight: any) => (
          <SpotlightCard key={spotlight.slug.current} spotlight={spotlight} />
        ))}
      </div>
    </main>
  )
}
