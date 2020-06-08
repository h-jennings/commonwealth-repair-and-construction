import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ined3iq2',
  dataset: 'production',
  useCdn: true,
});
