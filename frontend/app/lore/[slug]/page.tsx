import { fetchLoreBySlug, fetchRelatedLoreByCategory } from "../../../lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";
import type { LoreEntry } from "../../../lib/types";
import RelatedPosts from "../../../components/RelatedPosts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function LoreDetailPage({ params }: Props) {
  const lore: LoreEntry = await fetchLoreBySlug(params.slug);
  if (!lore) return notFound();

  const related = await fetchRelatedLoreByCategory(lore.category, lore._id);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-white">
      {lore.image?.asset?.url && (
        <Image
          src={lore.image.asset.url}
          alt={lore.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold text-animekey-green mb-2">{lore.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {lore.category}
        {lore.series?.title && <> · {lore.series.title}</>}
      </p>

      <div className="prose prose-invert max-w-none mb-12">
        <PortableText value={lore.body as PortableTextBlock[]} />
      </div>

      <RelatedPosts posts={related} />
    </main>
  );
}
