// frontend/app/lore/[slug]/page.tsx

import { getLoreBySlug } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}

export default async function LoreDetailPage({ params }: Props) {
  const lore = await getLoreBySlug(params.slug)

  if (!lore) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-white">
      {/* Cover image */}
      {lore.image?.asset?.url && (
        <Image
          src={lore.image.asset.url}
          alt={lore.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />
      )}

      {/* Title & Metadata */}
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{lore.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {lore.category} · {lore.series}
      </p>

      {/* Lore body */}
      <div className="prose prose-invert max-w-none">
        <PortableText value={lore.body as import('@portabletext/types').TypedObject[]} />
      </div>
    </main>
  )
}
