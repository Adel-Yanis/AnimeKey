// lib/server/search.ts
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity.client';
import type { SearchResult } from '../types';

export async function fetchSearchResults(query: string): Promise<SearchResult[]> {
  return sanityClient.fetch<SearchResult[]>(
    groq`
      *[
        _type in ["blogPost", "lore", "spotlight", "communityPost"] &&
        (
          (defined(title) && title match $query) ||
          (defined(excerpt) && excerpt match $query) ||
          (defined(summary) && summary match $query) ||
          (defined(bio) && bio match $query)
        )
      ][0...5] {
        _id,
        _type,
        _type as type,
        title: coalesce(title, name),
        name,
        slug,
        excerpt,
        summary,
        bio,
        coverImage { asset->{ url } },
        image { asset->{ url } },
        mainImage { asset->{ url } },
        category->{ title, slug },
        author->{ name },
        username,
        featureBody,
        body,
        ticketUrl,
        location,
        date
      }
    `,
    { query: `${query}*` } as Record<string, string>
  );
}
