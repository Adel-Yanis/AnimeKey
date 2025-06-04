'use client'

import { useState } from 'react'
import { useSearchSuggestions } from '../../lib/hooks/useSearchSuggestions'
import Link from 'next/link'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const { suggestions, loading } = useSearchSuggestions(query)

  return (
    <main className="px-6 py-12 text-white">
      <h1 className="text-3xl font-bold text-animekey-green mb-6">Search</h1>

      <input
        type="text"
        placeholder="Start typing..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 mb-6 rounded border border-animekey-green bg-black text-white focus:outline-none"
      />

      {loading && <p className="text-sm text-gray-400">Searching...</p>}

      {!loading && suggestions.length === 0 && query.length > 1 && (
        <p className="text-sm text-gray-400">No matching posts found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map((post) => (
          <Link
            key={post._id}
            href={`/${post.type}/${post.slug.current}`}
            className="border border-gray-700 p-4 rounded hover:bg-gray-800 transition"
          >
            <p className="text-xs text-animekey-green mb-1">
              {typeof post.category === 'string'
                ? post.category
                : post.category?.title || 'Uncategorized'}
            </p>
            <h3 className="text-base font-bold text-white">{post.title || post.name}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
              {post.excerpt || post.summary || post.bio || ''}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
