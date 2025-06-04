import { fetchSpotlightBySlug, fetchRelatedSpotlights } from "../../../lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { SpotlightEntry } from "../../../lib/types";
import RelatedPosts from "../../../components/RelatedPosts";

type Params = {
  params: {
    slug: string;
  };
};

export default async function SpotlightDetailPage({ params }: Params) {
  const spotlight: SpotlightEntry | null = await fetchSpotlightBySlug(params.slug);
  if (!spotlight) return notFound();

  const related = await fetchRelatedSpotlights(spotlight._id);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      {spotlight.image?.asset?.url && (
        <Image
          src={spotlight.image.asset.url}
          alt={spotlight.name}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold text-animekey-green mb-2">{spotlight.name}</h1>
      <p className="text-sm text-gray-400 mb-6">{spotlight.bio}</p>

      <div className="prose prose-invert max-w-none mb-12">
        <PortableText value={spotlight.featureBody} />
      </div>

      <RelatedPosts posts={related} />
    </article>
  );
}
