import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '../../../lib/sanity.client';
import { BlogPost } from '../../../lib/types';
import UserActivityTracker from '../../../components/UserActivityTracker';
import RelatedPosts from '../../../components/RelatedPosts';
import { fetchRelatedBlogPosts } from '../../../lib/queries';

const query = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    content,
    coverImage { asset->{ url } },
    author->{ name },
    category->{ title, slug }
  }
`;

interface Params {
  slug: string;
}

export default async function BlogPostDetailPage({ params }: { params: Params }) {
  const post: BlogPost | null = await client.fetch(query, { slug: params.slug });

  if (!post) return notFound();

  const categorySlug = post.category?.slug?.current || 'default';
  const related = await fetchRelatedBlogPosts(categorySlug, post._id);

  return (
    <main className="px-6">
      <UserActivityTracker />
      <h1 className="text-2xl font-bold text-animekey-green">{post.title}</h1>
      <p className="text-sm text-gray-400 mt-1">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {post.coverImage?.asset?.url && (
        <div className="relative w-full h-96 my-4">
          <Image
            src={post.coverImage.asset.url}
            alt={post.title}
            fill
            className="rounded object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* Optional content rendering here */}

      <RelatedPosts posts={related} />
    </main>
  );
}
