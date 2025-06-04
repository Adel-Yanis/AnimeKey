// frontend/components/SmartSearchBar.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchSuggestions } from '../lib/hooks/useSearchSuggestions';
import type { SearchResult } from '../lib/types';

export default function SmartSearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { suggestions } = useSearchSuggestions(query);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length > 1) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowDropdown(false);
    }
  };

  const handleSelect = (post: SearchResult) => {
    setQuery('');
    setShowDropdown(false);
    router.push(`/${post.type}/${post.slug.current}`);
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          className="w-full px-3 py-2 rounded border border-animekey-green bg-black text-white focus:outline-none"
        />
      </form>

      {showDropdown && query.length > 1 && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-[#1e1e1e] border border-animekey-green rounded shadow-lg max-h-64 overflow-y-auto">
          {suggestions.map((post) => (
            <button
              key={post._id}
              onClick={() => handleSelect(post)}
              className="block w-full text-left px-4 py-2 hover:bg-animekey-green hover:text-black text-sm border-b border-gray-700"
            >
              <span className="block font-semibold">{post.title}</span>
              <span className="block text-gray-400 text-xs">{post.type}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
