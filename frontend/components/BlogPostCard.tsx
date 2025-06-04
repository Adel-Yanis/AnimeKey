import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../lib/types';

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="border border-gray-700 p-4 rounded hover:bg-gray-800 transition cursor-pointer">
        {post.coverImage?.asset?.url && (
          <div className="relative w-full h-48 mb-3">
            <Image
              src={post.coverImage.asset.url}
              alt={post.title}
              fill
              className="rounded object-cover"
            />
          </div>
        )}
        <p className="text-xs text-animekey-green mb-1">
          {post.category?.title || 'Uncategorized'}
        </p>
        <h3 className="text-base font-bold text-white">{post.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 mt-1">
          {post.excerpt || 'No summary available.'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          By {post.author.name} · {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}
