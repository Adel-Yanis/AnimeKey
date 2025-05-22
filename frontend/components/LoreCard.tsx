// frontend/components/LoreCard.tsx

import Link from 'next/link'

export default function LoreCard({ lore }: { lore: any }) {
  return (
    <Link href={`/lore/${lore.slug.current}`}>
      <div className="bg-zinc-900 border border-animekey-green rounded-lg overflow-hidden hover:shadow-lg transition">
        {lore.image?.asset?.url && (
          <img
            src={lore.image.asset.url}
            alt={lore.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{lore.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{lore.summary}</p>
          <span className="text-xs text-animekey-green uppercase tracking-wider">
            {lore.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
