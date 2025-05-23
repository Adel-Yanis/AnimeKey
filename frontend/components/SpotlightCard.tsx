// frontend/components/SpotlightCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

type SpotlightCardProps = {
  spotlight: {
    name: string;
    slug: { current: string };
    image: { asset: { url: string } };
    bio: string;
  };
};

export default function SpotlightCard({ spotlight }: SpotlightCardProps) {
  return (
    <Link href={`/spotlight/${spotlight.slug.current}`}>
      <div className="bg-zinc-900 border border-animekey-green rounded-lg overflow-hidden hover:shadow-lg transition">
        {spotlight.image.asset.url && (
          <Image
            src={spotlight.image.asset.url}
            alt={spotlight.name}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{spotlight.name}</h3>
          <p className="text-sm text-gray-400">{spotlight.bio}</p>
        </div>
      </div>
    </Link>
  );
}
