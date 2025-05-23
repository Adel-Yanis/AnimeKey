'use client';

import NotificationTrigger from '../components/NotificationTrigger';
import type { EventPost } from '../lib/types';
import EventCard from './EventCard';

export default function EventsClientView({ posts }: { posts: EventPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id}>
          <NotificationTrigger
            type="event"
            message={`📅 Event: ${post.title}`}
            url={`/events/${post.slug.current}`}
          />
          <EventCard post={post} />
        </div>
      ))}
    </div>
  );
}
