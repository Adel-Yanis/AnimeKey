'use client';

import NotificationTrigger from '../components/NotificationTrigger';
import type { CommunityPost } from '../lib/types';
import CommunityCard from './CommunityCard';

export default function CommunityClientView({ posts }: { posts: CommunityPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id}>
          <NotificationTrigger
            type="community"
            message={`💬 Community: ${post.title}`}
            url={`/community/${post.slug.current}`}
          />
          <CommunityCard post={post} />
        </div>
      ))}
    </div>
  );
}
