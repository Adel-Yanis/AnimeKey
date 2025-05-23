// frontend/app/spotlight/[slug]/page.tsx
import { fetchSpotlightBySlug } from "../../../lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { SpotlightEntry } from "../../../lib/types";

type Params = {
  params: {
    slug: string;
  };
};

export default async function SpotlightDetailPage({ params }: Params) {
  const spotlight: SpotlightEntry | null = await fetchSpotlightBySlug(params.slug);

  if (!spotlight) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      {/* 🖼️ Cover Image */}
      {spotlight.image?.asset?.url && (
        <Image
          src={spotlight.image.asset.url}
          alt={spotlight.name}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />
      )}

      {/* 📝 Title & Bio */}
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{spotlight.name}</h1>
      <p className="text-sm text-gray-400 mb-6">{spotlight.bio}</p>

      {/* 🧠 Spotlight Body */}
      <div className="prose prose-invert max-w-none">
        <PortableText value={spotlight.featureBody} />
      </div>
    </article>
  );
}
