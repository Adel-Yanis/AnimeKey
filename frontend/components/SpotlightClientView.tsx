'use client';

import NotificationTrigger from '../components/NotificationTrigger';
import type { SpotlightEntry } from '../lib/types';
import SpotlightCard from './SpotlightCard';

export default function SpotlightClientView({ posts }: { posts: SpotlightEntry[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id}>
          <NotificationTrigger
            type="spotlight"
            message={`🎤 Spotlight: ${post.name}`}
            url={`/spotlight/${post.slug.current}`}
          />
          <SpotlightCard spotlight={post} />
        </div>
      ))}
    </div>
  );
}
