'use client'

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Search Results</h1>
      <p className="mb-4 text-sm text-gray-400">
        Showing results for: <span className="text-white font-medium">{query}</span>
      </p>

      {/* Placeholder for real search results */}
      <p className="italic text-sm text-gray-500">Search logic will appear here in the future...</p>
    </div>
  );
}
