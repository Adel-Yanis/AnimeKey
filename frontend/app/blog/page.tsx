'use client';

import { useEffect, useState } from 'react';
import CategoryFilter from '../../components/CategoryFilter';
import BlogPostCard from '../../components/BlogPostCard';
import {
  fetchAllCategories,
  fetchAllBlogPosts,
  fetchBlogPostsByCategory,
} from '../../lib/queries';
import type { BlogPost, Category } from '../../lib/types';

export default function BlogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [allCategories, allPosts] = await Promise.all([
        fetchAllCategories(),
        fetchAllBlogPosts(),
      ]);
      setCategories(allCategories);
      setPosts(allPosts);
    };
    loadData();
  }, []);

  const handleCategoryChange = async (slug: string | null) => {
    setSelectedCategory(slug);
    if (slug) {
      const filtered = await fetchBlogPostsByCategory(slug);
      setPosts(filtered);
    } else {
      const all = await fetchAllBlogPosts();
      setPosts(all);
    }
  };

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Latest Blog Posts</h1>
      <p className="text-sm text-gray-400 mb-6">
        Our latest blog updates, insights, and editorial content.
      </p>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
