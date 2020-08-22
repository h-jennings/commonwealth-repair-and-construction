import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.SANITY_ID as string,
  dataset: 'production',
  useCdn: true,
});
