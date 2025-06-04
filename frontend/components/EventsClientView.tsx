'use client';

import EventCard from './EventCard';
import { EventPost } from '../lib/types';

export default function EventsClientView({ posts }: { posts: EventPost[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((event) => (
        <EventCard key={event._id} post={event} />
      ))}
    </div>
  );
}
