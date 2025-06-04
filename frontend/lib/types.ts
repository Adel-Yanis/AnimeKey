import type { PortableTextBlock } from 'sanity';

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  coverImage: { asset: { url: string } };
  author: { name: string };
  category: { title: string; slug: { current: string } };
  content?: PortableTextBlock[];
}

export interface LoreEntry {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  category: string;
  image: { asset: { url: string } };
  series?: { title: string; slug: string };
  body: PortableTextBlock[];
}

export interface SpotlightEntry {
  _id: string;
  name: string;
  slug: { current: string };
  bio: string;
  image: { asset: { url: string } };
  featureBody: PortableTextBlock[];
}

export interface CommunityPost {
  _id: string;
  title: string;
  slug: { current: string };
  username: string;
  type: string;
  body: PortableTextBlock[];
}

export interface EventPost {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  location?: string;
  ticketUrl?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  body: PortableTextBlock[];
}

export interface SearchResult {
  _id: string;
  title: string;
  slug: { current: string };
  type: 'blogPost' | 'lore' | 'spotlight' | 'communityPost';
  category?: { title: string; slug: string };
  excerpt?: string;
  summary?: string;
  bio?: string;
  coverImage?: { asset: { url: string } };
  image?: { asset: { url: string } };
  mainImage?: { asset: { url: string } };
  author?: { name: string };
  username?: string;
  name?: string;
  featureBody?: PortableTextBlock[];
  body?: PortableTextBlock[];
  ticketUrl?: string;
  location?: string;
  date?: string;
}

export interface Notification {
  id: string;
  type: string;
  message: string;
  url: string;
  timestamp: string;
  read: boolean;
  icon: string;
}

export interface Category {
  title: string;
  slug: { current: string };
}
