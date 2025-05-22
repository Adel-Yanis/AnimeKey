import { getEvents } from '@/lib/queries'
import EventCard from '@/components/EventCard'
import ClientNotificationTrigger from '@/components/ClientNotificationTrigger'

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Events</h1>
      <p className="text-sm text-gray-400 mb-8">
        Check out the latest AnimeKey events, appearances, and meetups.
      </p>

      <ClientNotificationTrigger
        title={events[0]?.title || 'New Event'}
        slug={events[0]?.slug?.current || ''}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </main>
  )
}
