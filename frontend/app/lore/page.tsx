'use client';

import { useEffect, useState } from 'react';
import CategoryFilter from '../../components/CategoryFilter';
import LoreCard from '../../components/LoreCard';
import { fetchAllCategories, fetchAllLoreEntries, fetchLoreByCategory } from '../../lib/queries';
import type { LoreEntry, Category } from '../../lib/types';

export default function LorePage() {
  const [entries, setEntries] = useState<LoreEntry[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [initialEntries, allCategories] = await Promise.all([
        fetchAllLoreEntries(),
        fetchAllCategories()
      ]);
      setEntries(initialEntries);
      setCategories(allCategories);
    };
    loadData();
  }, []);

  const handleCategoryChange = async (slug: string | null) => {
    setSelectedCategory(slug);
    if (slug) {
      const filtered = await fetchLoreByCategory(slug);
      setEntries(filtered);
    } else {
      const all = await fetchAllLoreEntries();
      setEntries(all);
    }
  };

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Lore Section</h1>
      <p className="text-sm text-gray-400 mb-6">
        Explore deep dives into anime worlds, characters, and timelines.
      </p>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {entries.map((entry) => (
          <LoreCard key={entry._id} post={entry} />
        ))}
      </div>
    </main>
  );
}
