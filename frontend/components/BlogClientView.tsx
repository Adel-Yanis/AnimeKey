// frontend/components/BlogClientView.tsx

'use client';

import NotificationTrigger from '../components/NotificationTrigger';
import type { BlogPost } from '../lib/types';
import BlogPostCard from './BlogPostCard';

export default function BlogClientView({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id}>
          <NotificationTrigger
            type="blog"
            message={`📝 Blog: ${post.title}`}
            url={`/blog/${post.slug.current}`}
          />
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  );
}
