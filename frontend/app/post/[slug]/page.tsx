// frontend/app/post/[slug]/page.tsx
import { fetchBlogPostBySlug } from "../../../lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import UserActivityTracker from "../../../components/UserActivityTracker";
import type { BlogPost } from "../../../lib/types";

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const post: BlogPost | null = await fetchBlogPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      {/* 📊 Activity Tracking */}
      <UserActivityTracker />

      {/* 📝 Title & Meta */}
      <h1 className="text-3xl font-bold text-animekey-green mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(post.publishedAt).toLocaleDateString()} ·{" "}
        <span className="underline cursor-pointer">{post.author?.name}</span>
        {post.category?.title && (
          <>
            {" "}
            · Category:{" "}
            <span className="underline cursor-pointer">{post.category.title}</span>
          </>
        )}
      </p>

      {/* 🖼️ Cover Image */}
      {post.coverImage?.url && (
        <Image
          src={post.coverImage.url}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      {/* 📚 Article Body */}
      <div className="prose prose-invert max-w-none">
        <PortableText value={post.content as PortableTextBlock[]} />
      </div>
    </article>
  );
}

// Optional SEO metadata if needed later
// export async function generateMetadata({ params }: Params) {
//   const post = await fetchBlogPostBySlug(params.slug);
//   return post
//     ? { title: post.title, description: post.excerpt }
//     : { title: "Blog Post", description: "Read more posts on AnimeKey" };
// }
