import { getCommunityPosts } from '../../lib/queries';
import { client } from '../../lib/sanity.client';
import CommunityClientView from '../../components/CommunityClientView';
import type { CommunityPost } from '../../lib/types';

export default async function CommunityPage() {
  const posts: CommunityPost[] = await client.fetch(getCommunityPosts);
  return <CommunityClientView posts={posts} />;
}
