'use client'

import { useEffect, useState } from 'react';
import { BlogPost } from '../../lib/types';
import BlogPostCard from '../../components/BlogPostCard';
import UserActivityTracker from '../../components/UserActivityTracker';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/sanity-webhook');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <UserActivityTracker />

      <h1 className="text-2xl font-bold text-animekey-green mb-4">Latest Blog Posts</h1>
      <p className="text-sm text-gray-400 mb-8">
        Our latest blog updates, insights, and editorial content.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
