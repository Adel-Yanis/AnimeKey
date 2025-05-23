// app/blog/[slug]/page.tsx
import React from 'react';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { client } from '../../../lib/sanity.client';
import { BlogPost } from '../../../lib/types';
import UserActivityTracker from '../../../components/UserActivityTracker';

const query = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage {
      url
    },
    author->{
      name
    },
    content
  }
`;

export default async function BlogPostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: BlogPost | null = await client.fetch(query, {
    slug: params.slug,
  });

  if (!post) return notFound();

  return (
    <main className="text-white px-4 py-12 max-w-3xl mx-auto">
      <UserActivityTracker />

      {post.coverImage?.url && (
        <Image
          src={post.coverImage.url}
          alt={post.title}
          width={1020}
          height={600}
          className="w-full rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-bold text-animekey-green mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400">
        By {post.author.name} | {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Add PortableText here if needed */}
    </main>
  );
}
