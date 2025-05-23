'use client';

// frontend/app/search/page.tsx
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type SearchResult = {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    // TODO: Replace with actual GROQ query logic
    setTimeout(() => {
      setResults([
        {
          _id: '1',
          title: 'Placeholder result',
          slug: { current: 'placeholder' },
          category: 'blog',
        },
      ]);
      setLoading(false);
    }, 800);
  }, [query]);

  return (
    <main className="p-8 text-white">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Search Results</h1>
      <p className="mb-4 text-sm text-gray-400">
        Showing results for:{' '}
        <span className="text-white font-medium">{query}</span>
      </p>

      {/* Filter Controls */}
      <div className="mb-6 flex gap-4 flex-wrap">
        <select
          className="bg-black text-white border border-gray-700 px-3 py-2 rounded"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          <option value="blog">Blog</option>
          <option value="lore">Lore</option>
          <option value="community">Community</option>
          <option value="spotlight">Spotlight</option>
        </select>
        <select
          className="bg-black text-white border border-gray-700 px-3 py-2 rounded"
          aria-label="Sort by"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-sm italic text-gray-500">Loading results...</p>
      ) : results.length === 0 ? (
        <p className="italic text-sm text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result) => (
            <div
              key={result._id}
              className="border border-gray-700 p-4 rounded hover:bg-gray-800 transition"
            >
              <p className="font-bold">{result.title}</p>
              <p className="text-xs text-gray-400 capitalize">{result.category}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
