// lib/sanity.client.ts
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'brj0zoms',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export { sanityClient as client };
