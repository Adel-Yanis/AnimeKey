// frontend/app/events/page.tsx

import { getAllEvents } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity.client';
import EventCard from '../../components/EventCard';
import type { EventPost } from '../../lib/types';

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function EventsPage() {
  const events: EventPost[] = await sanityClient.fetch(getAllEvents);

  return (
    <main className="p-6 md:px-12 lg:px-24 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-animekey-green">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event._id} post={event} />
        ))}
      </div>
    </main>
  );
}
