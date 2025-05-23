import React from 'react';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import EventsClientView from '../../components/EventsClientView';
import UserActivityTracker from '../../components/UserActivityTracker';
import type { EventPost } from '../../lib/types';

export const revalidate = 60; // ISR every 60 seconds

const query = groq`*[_type == "eventPost"] | order(date desc){
  _id,
  title,
  slug,
  date,
  description
}`;

export default async function EventsPage() {
  const events: EventPost[] = await client.fetch(query);

  return (
    <>
      <UserActivityTracker />
      <section className="px-6 md:px-12 lg:px-24 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-animekey-green">Upcoming Events</h1>
        <EventsClientView posts={events} />
      </section>
    </>
  );
}
