// frontend/lib/sanity.client.ts
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2023-12-01',
  useCdn: true,
});

// ✅ Named export as `client` for compatibility
export { sanityClient as client };
