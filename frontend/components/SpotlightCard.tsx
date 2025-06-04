'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SpotlightEntry } from '../lib/types';
import type { PortableTextBlock } from 'sanity';

export default function SpotlightCard({ post }: { post: SpotlightEntry }) {
  let previewText = post.bio || 'Learn more about this creator...';

  // Optional fallback if needed
  if (!post.bio && Array.isArray(post.featureBody)) {
    const firstBlock = post.featureBody[0] as PortableTextBlock;
    if (
      firstBlock &&
      firstBlock._type === 'block' &&
      Array.isArray(firstBlock.children) &&
      firstBlock.children[0]?._type === 'span'
    ) {
      previewText = firstBlock.children[0].text;
    }
  }

  return (
    <Link href={`/spotlight/${post.slug.current}`}>
      <div className="border border-animekey-green p-4 rounded-lg hover:bg-gray-800 transition cursor-pointer">
        {post.image?.asset?.url && (
          <div className="relative w-full h-48 mb-3">
            <Image
              src={post.image.asset.url}
              alt={post.name}
              fill
              className="rounded object-cover"
            />
          </div>
        )}
        <p className="text-xs text-animekey-green mb-1">Spotlight</p>
        <h3 className="text-base font-bold text-white">{post.name}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 mt-1">{previewText}</p>
      </div>
    </Link>
  );
}
