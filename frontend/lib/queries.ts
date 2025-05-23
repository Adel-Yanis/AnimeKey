import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";

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
    coverImage {
      asset-> { url }
    },
    author-> { name },
    category-> { title, slug }
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
    coverImage {
      asset-> { url }
    },
    author-> { name },
    category-> { title, slug }
  }
`;

export const fetchAllBlogPosts = async () => {
  return await sanityClient.fetch(getAllBlogPosts);
};

export const fetchBlogPostBySlug = async (slug: string) => {
  return await sanityClient.fetch(getBlogPostBySlug, { slug });
};


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

export const fetchCommunityPosts = async () => {
  return await sanityClient.fetch(getCommunityPosts);
};

export const fetchCommunityPostBySlug = async (slug: string) => {
  return await sanityClient.fetch(getCommunityPostBySlug, { slug });
};


//
// ─── LORE QUERIES ──────────────────────────────────────────────────────────────
//
export const getAllLoreEntries = groq`
  *[_type == "lore"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    series-> {
      title,
      slug
    },
    image {
      asset-> { url }
    },
    body
  }
`;

export const getLoreBySlug = groq`
  *[_type == "lore" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    series-> {
      title,
      slug
    },
    image {
      asset-> { url }
    },
    body
  }
`;

export const fetchAllLoreEntries = async () => {
  return await sanityClient.fetch(getAllLoreEntries);
};

export const fetchLoreBySlug = async (slug: string) => {
  return await sanityClient.fetch(getLoreBySlug, { slug });
};


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
    mainImage {
      asset-> { url }
    },
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
    mainImage {
      asset-> { url }
    },
    body
  }
`;

export const fetchAllEvents = async () => {
  return await sanityClient.fetch(getAllEvents);
};

export const fetchEventBySlug = async (slug: string) => {
  return await sanityClient.fetch(getEventBySlug, { slug });
};


//
// ─── SPOTLIGHT QUERIES ─────────────────────────────────────────────────────────
//
export const getAllSpotlights = groq`
  *[_type == "spotlight"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    bio,
    image {
      asset-> { url }
    },
    featureBody
  }
`;

export const getSpotlightBySlug = groq`
  *[_type == "spotlight" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    bio,
    image {
      asset-> { url }
    },
    featureBody
  }
`;

export const fetchAllSpotlights = async () => {
  return await sanityClient.fetch(getAllSpotlights);
};

export const fetchSpotlightBySlug = async (slug: string) => {
  return await sanityClient.fetch(getSpotlightBySlug, { slug });
};


//
// ─── HOMEPAGE CONTENT BATCH ─────────────────────────────────────────────────────
//
export const getHomepageContent = groq`
{
  "topBlogs": *[_type == "blogPost"] | order(publishedAt desc)[0...3],
  "latestLore": *[_type == "lore"] | order(_createdAt desc)[0...3],
  "recentSpotlights": *[_type == "spotlight"] | order(_createdAt desc)[0...2],
  "upcomingEvent": *[_type == "event" && date > now()] | order(date asc)[0],
  "communityBuzz": *[_type == "communityPost"] | order(_createdAt desc)[0...2]
}
`;

export const fetchHomepageContent = async () => {
  return await sanityClient.fetch(getHomepageContent);
};
