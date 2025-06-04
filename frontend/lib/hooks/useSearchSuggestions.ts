'use client';

import { useEffect, useState } from 'react';
import { SearchResult } from '../types';

export function useSearchSuggestions(query: string) {
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search-suggestions?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });

        // 🔥 This is where the frontend throws
        if (!res.ok) {
          // Show real status and message (temporary safe debug)
          const text = await res.text();
          throw new Error(`Failed to fetch suggestions: ${res.status} - ${text}`);
        }

        const data: SearchResult[] = await res.json();
        setSuggestions(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Search suggestion fetch failed:', err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
    return () => controller.abort();
  }, [query]);

  return { suggestions, loading };
}
