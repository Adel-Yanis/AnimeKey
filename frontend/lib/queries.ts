import { groq } from 'next-sanity';
import { sanityClient } from './sanity.client';
import type { SearchResult } from './types';

//
// ─── BLOG QUERIES ──────────────────────────────────────────────────────────────
//
export const getAllBlogPosts = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage { asset->{ url } },
    author->{ name },
    category->{ title, slug }
  }
`;

export const getBlogPostBySlug = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    coverImage { asset->{ url } },
    author->{ name },
    category->{ title, slug }
  }
`;

export const getRelatedBlogPosts = groq`
  *[_type == "blogPost" && category->slug.current == $categorySlug && _id != $excludeId][0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage { asset->{ url } },
    author->{ name },
    category->{ title, slug }
  }
`;

export const fetchAllBlogPosts = async () => sanityClient.fetch(getAllBlogPosts);
export const fetchBlogPostBySlug = async (slug: string) =>
  sanityClient.fetch(getBlogPostBySlug, { slug });
export const fetchRelatedBlogPosts = async (categorySlug: string, excludeId: string) =>
  sanityClient.fetch(getRelatedBlogPosts, { categorySlug, excludeId });


//
// ─── LORE QUERIES ──────────────────────────────────────────────────────────────
//
export const getAllLoreEntries = groq`
  *[_type == "lore"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    summary,
    series->{ title, slug },
    image { asset->{ url } },
    body
  }
`;

export const getLoreBySlug = groq`
  *[_type == "lore" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    summary,
    series->{ title, slug },
    image { asset->{ url } },
    body
  }
`;

export const getRelatedLoreByCategory = groq`
  *[_type == "lore" && category == $category && _id != $excludeId][0...3] {
    _id,
    title,
    slug,
    category,
    summary,
    series->{ title, slug },
    image { asset->{ url } },
    body
  }
`;

export const fetchAllLoreEntries = async () => sanityClient.fetch(getAllLoreEntries);
export const fetchLoreBySlug = async (slug: string) => sanityClient.fetch(getLoreBySlug, { slug });
export const fetchRelatedLoreByCategory = async (category: string, excludeId: string) =>
  sanityClient.fetch(getRelatedLoreByCategory, { category, excludeId });


//
// ─── SPOTLIGHT QUERIES ─────────────────────────────────────────────────────────
//
export const getAllSpotlights = groq`
  *[_type == "spotlight"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    bio,
    image { asset->{ url } },
    featureBody
  }
`;

export const getSpotlightBySlug = groq`
  *[_type == "spotlight" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    bio,
    image { asset->{ url } },
    featureBody
  }
`;

export const getRelatedSpotlights = groq`
  *[_type == "spotlight" && _id != $excludeId][0...3] {
    _id,
    name,
    slug,
    bio,
    image { asset->{ url } },
    featureBody
  }
`;

export const fetchAllSpotlights = async () => sanityClient.fetch(getAllSpotlights);
export const fetchSpotlightBySlug = async (slug: string) =>
  sanityClient.fetch(getSpotlightBySlug, { slug });
export const fetchRelatedSpotlights = async (excludeId: string) =>
  sanityClient.fetch(getRelatedSpotlights, { excludeId });


//
// ─── COMMUNITY QUERIES ─────────────────────────────────────────────────────────
//
export const getCommunityPosts = groq`
  *[_type == "communityPost"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    username,
    type,
    body
  }
`;

export const getCommunityPostBySlug = groq`
  *[_type == "communityPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    username,
    type,
    body
  }
`;

export const fetchCommunityPosts = async () => sanityClient.fetch(getCommunityPosts);
export const fetchCommunityPostBySlug = async (slug: string) =>
  sanityClient.fetch(getCommunityPostBySlug, { slug });


//
// ─── EVENT QUERIES ─────────────────────────────────────────────────────────────
//
export const getAllEvents = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    location,
    ticketUrl,
    image: mainImage { asset->{ url } },
    body
  }
`;

export const getEventBySlug = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    location,
    ticketUrl,
    image: mainImage { asset->{ url } },
    body
  }
`;

export const fetchAllEvents = async () => sanityClient.fetch(getAllEvents);
export const fetchEventBySlug = async (slug: string) => sanityClient.fetch(getEventBySlug, { slug });


//
// ─── CATEGORY QUERIES ─────────────────────────────────────────────────────────
//
export const getAllCategories = groq`
  *[_type == "category"] | order(title asc) {
    title,
    slug
  }
`;

export const fetchAllCategories = async () =>
  sanityClient.fetch(getAllCategories);


//
// ─── UNIFIED SEARCH RESULTS ────────────────────────────────────────────────────
//
export const getUnifiedSearchResults = groq`
  [
    ...*[_type == "blogPost"]{ _id, title, slug, type: "blogPost", category->{ title, slug }, excerpt, coverImage { asset->{ url } }, author->{ name }, publishedAt },
    ...*[_type == "lore"]{ _id, title, slug, type: "lore", category, summary, image{ asset->{ url } } },
    ...*[_type == "spotlight"]{ _id, name, slug, type: "spotlight", bio, image{ asset->{ url } } },
    ...*[_type == "communityPost"]{ _id, title, slug, type: "communityPost", username, body }
  ]
`;


//
// ─── SEARCH SUGGESTIONS ────────────────────────────────────────────────────────
//
export const fetchSearchResults = async (
  query: string
): Promise<SearchResult[]> => {
  const sanitized = `${query}*`; // Sanity requires wildcard suffix for match
  return sanityClient.fetch<SearchResult[]>(
    groq`
      *[
        _type in ["blogPost", "lore", "spotlight", "communityPost"] &&
        (
          (defined(title) && title match $query) ||
          (defined(name) && name match $query) ||
          (defined(summary) && summary match $query) ||
          (defined(bio) && bio match $query) ||
          (defined(username) && username match $query)
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
        coverImage {
          asset->{ url }
        },
        image {
          asset->{ url }
        },
        mainImage {
          asset->{ url }
        },
        category -> {
          title,
          slug
        },
        author -> {
          name
        },
        username,
        featureBody,
        body,
        ticketUrl,
        location,
        date
      }
    `,
    { query: sanitized } as Record<string, string>
  );
};



