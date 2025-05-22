// frontend/app/spotlight/[slug]/page.tsx

import { getSpotlightBySlug } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

export default async function SpotlightDetailPage({ params }: Params) {
  const spotlight = await getSpotlightBySlug(params.slug)

  if (!spotlight) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      {spotlight.image?.asset?.url && (
        <Image
          src={spotlight.image.asset.url}
          alt={spotlight.name}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{spotlight.name}</h1>
      <p className="text-gray-400 text-sm mb-6">{spotlight.bio}</p>

      <div className="prose prose-invert max-w-none">
        <PortableText value={spotlight.featureBody as import('@portabletext/types').TypedObject[]} />
      </div>
    </article>
  )
}
