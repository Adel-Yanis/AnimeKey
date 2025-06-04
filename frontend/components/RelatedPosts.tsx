'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { SearchResult } from '../lib/types';

interface RelatedPostsProps {
  posts: SearchResult[];
  title?: string;
}

export default function RelatedPosts({ posts, title = 'Related Posts' }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  const getPath = (type: string): string => {
    switch (type) {
      case 'blogPost':
        return 'blog';
      case 'lore':
        return 'lore';
      case 'spotlight':
        return 'spotlight';
      default:
        return 'post'; // fallback route
    }
  };

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-animekey-green mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => {
          const basePath = getPath(post.type);
          return (
            <Link key={post._id} href={`/${basePath}/${post.slug.current}`}>
              <div className="border border-gray-700 p-4 rounded hover:bg-gray-800 transition cursor-pointer">
                {post.image?.asset?.url && (
                  <div className="relative w-full h-40 mb-3">
                    <Image
                      src={post.image.asset.url}
                      alt={post.title}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                )}
                <p className="text-xs text-animekey-green mb-1">
                  {typeof post.category === 'string'
                    ? post.category
                    : post.category?.title || 'Uncategorized'}
                </p>
                <h3 className="text-base font-bold text-white line-clamp-2">{post.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
