'use client';

import { useEffect, useState } from 'react';
import CategoryFilter from '../../components/CategoryFilter';
import SpotlightCard from '../../components/SpotlightCard';
import {
  fetchAllCategories,
  fetchAllSpotlights,
  fetchSpotlightByCategory
} from '../../lib/queries';
import type { SpotlightEntry, Category } from '../../lib/types';

export default function SpotlightPage() {
  const [spotlights, setSpotlights] = useState<SpotlightEntry[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [initialSpotlights, allCategories] = await Promise.all([
        fetchAllSpotlights(),
        fetchAllCategories()
      ]);
      setSpotlights(initialSpotlights);
      setCategories(allCategories);
    };
    loadData();
  }, []);

  const handleCategoryChange = async (slug: string | null) => {
    setSelectedCategory(slug);
    if (slug) {
      const filtered = await fetchSpotlightByCategory(slug);
      setSpotlights(filtered);
    } else {
      const all = await fetchAllSpotlights();
      setSpotlights(all);
    }
  };

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Creator Spotlights</h1>
      <p className="text-sm text-gray-400 mb-6">
        Discover the brilliant minds shaping the anime world.
      </p>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {spotlights.map((spotlight) => (
          <SpotlightCard key={spotlight._id} post={spotlight} />
        ))}
      </div>
    </main>
  );
}
