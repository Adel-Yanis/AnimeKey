'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { EventPost } from '../lib/types';

export default function EventCard({ post }: { post: EventPost }) {
  return (
    <Link href={`/events/${post.slug.current}`}>
      <div className="border border-animekey-green p-4 rounded-lg hover:bg-gray-800 transition cursor-pointer">
        <div className="text-xs text-animekey-green mb-1">
          {new Date(post.date).toLocaleString()}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>

        {post.image?.asset?.url && (
          <div className="relative w-full h-48 mb-2">
            <Image
              src={post.image.asset.url}
              alt={post.title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        )}

        <p className="text-sm text-gray-400 line-clamp-2">{post.location}</p>
      </div>
    </Link>
  );
}
