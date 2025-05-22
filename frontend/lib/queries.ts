// frontend/lib/queries.ts

import { groq } from 'next-sanity'
import { sanityClient } from './sanity.client'

/** HOMEPAGE — Top Banner */
const topPostQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0] {
    title,
    slug,
    mainImage {
      asset -> {
        url
      }
    }
  }
`

export async function getTopPost() {
  return await sanityClient.fetch(topPostQuery)
}

/** BLOG LIST */
const blogQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset -> { url }
    },
    "author": author->name,
    "category": category->title
  }
`

export async function getBlogPosts() {
  return await sanityClient.fetch(blogQuery)
}

/** BLOG POST DETAIL */
const postDetailQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset -> { url }
    },
    "author": author->name,
    "category": category->title
  }
`

export async function getPostBySlug(slug: string) {
  return await sanityClient.fetch(postDetailQuery, { slug })
}

/** LORE LIST */
const loreQuery = groq`
  *[_type == "lore"] | order(_createdAt desc)[0...20] {
    _id,
    title,
    slug,
    summary,
    category,
    image {
      asset -> { url }
    }
  }
`

export async function getLorePosts() {
  return await sanityClient.fetch(loreQuery)
}

/** LORE DETAIL */
const loreDetailQuery = groq`
  *[_type == "lore" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    category,
    series,
    image {
      asset -> { url }
    },
    body
  }
`

export async function getLoreBySlug(slug: string) {
  return await sanityClient.fetch(loreDetailQuery, { slug })
}
// 🟢 SPOTLIGHT LIST
const spotlightQuery = groq`
  *[_type == "spotlight"] | order(_createdAt desc)[0...10] {
    name,
    slug,
    image {
      asset -> { url }
    },
    bio
  }
`

export async function getSpotlights() {
  return await sanityClient.fetch(spotlightQuery)
}

// 🟢 SPOTLIGHT DETAIL
const spotlightDetailQuery = groq`
  *[_type == "spotlight" && slug.current == $slug][0] {
    name,
    slug,
    image {
      asset -> { url }
    },
    bio,
    featureBody
  }
`

export async function getSpotlightBySlug(slug: string) {
  return await sanityClient.fetch(spotlightDetailQuery, { slug })
}
/** COMMUNITY LIST */
const communityQuery = groq`
  *[_type == "communityPost" && approved == true] | order(_createdAt desc)[0...20] {
    _id,
    title,
    slug,
    username,
    type,
    body
  }
`

export async function getCommunityPosts() {
  return await sanityClient.fetch(communityQuery)
}
/** COMMUNITY DETAIL */
const communityDetailQuery = groq`
  *[_type == "communityPost" && slug.current == $slug && approved == true][0] {
    _id,
    title,
    slug,
    username,
    type,
    body
  }
`

export async function getCommunityPostBySlug(slug: string) {
  return await sanityClient.fetch(communityDetailQuery, { slug })
}
// Event list query
const eventQuery = groq`
  *[_type == "event"] | order(date asc)[0...20] {
    _id,
    title,
    slug,
    summary,
    date,
    image {
      asset -> { url }
    }
  }
`

export async function getEventPosts() {
  return await sanityClient.fetch(eventQuery)
}

// Event detail query
const eventDetailQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    date,
    image {
      asset -> { url }
    },
    body
  }
`

export async function getEventBySlug(slug: string) {
  return await sanityClient.fetch(eventDetailQuery, { slug })
}