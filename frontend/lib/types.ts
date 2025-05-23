// frontend/lib/types.ts
import type { PortableTextBlock } from "sanity";

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
  author: {
    name: string;
  };
  category?: {
    title: string;
    slug: string;
  };
  content: PortableTextBlock[];
}

export interface CommunityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  username: string;
  type: string;
  body: PortableTextBlock[];
}

export interface EventPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  date: string;
  description: PortableTextBlock[];
}

export interface LoreEntry {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      url: string;
    };
  };
  category: string;
  series?: {
    title: string;
    slug: string;
  };
  body: PortableTextBlock[];
}

export interface SpotlightEntry {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  bio: string;
  image: {
    asset: {
      url: string;
    };
  };
  featureBody: PortableTextBlock[]; // ✅ Newly added
}


export interface Notification {
  id: string; // ✅ Add this
  message: string;
  url: string;
  timestamp: string;
  read: boolean;
  icon: string;
}


export interface UserActivityLog {
  type: string;
  message: string;
  url: string;
  icon: string;
}
