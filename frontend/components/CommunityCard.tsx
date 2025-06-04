import Link from 'next/link';
import { CommunityPost } from '../lib/types';

export default function CommunityCard({ post }: { post: CommunityPost }) {
  if (!post._id) return null;

  return (
    <Link href={`/community/${post._id}`}>
      <div className="cursor-pointer border border-gray-700 p-4 rounded hover:bg-gray-800 transition">
        <p className="text-xs text-animekey-green mb-1">{post.type}</p>
        <h3 className="text-base font-bold text-white">{post.title}</h3>
      </div>
    </Link>
  );
}
