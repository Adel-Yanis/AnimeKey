'use client';

import NotificationTrigger from '../components/NotificationTrigger';
import type { LoreEntry } from '../lib/types';
import LoreCard from './LoreCard';

export default function LoreClientView({ posts }: { posts: LoreEntry[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id}>
          <NotificationTrigger
            type="lore"
            message={`📘 Lore: ${post.title}`}
            url={`/lore/${post.slug.current}`}
          />
          <LoreCard post={post} />
        </div>
      ))}
    </div>
  );
}