import { getCommunityPosts } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity.client';
import CommunityClientView from '../../components/CommunityClientView';
import type { CommunityPost } from '../../lib/types';

export default async function CommunityPage() {
  const posts: CommunityPost[] = await sanityClient.fetch(getCommunityPosts);
  return <CommunityClientView posts={posts} />;
}
