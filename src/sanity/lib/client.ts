import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const isPlaceholder = projectId === 'placeholder-project-id';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
})

// Override fetch to return empty data when using placeholder config
const originalFetch = client.fetch.bind(client);
client.fetch = async (query: string, params: any = {}, options: any = {}) => {
  if (isPlaceholder) {
    console.warn('⚠️  Using placeholder Sanity configuration. Returning empty data.');
    // Return empty structure based on common query patterns
    return {};
  }
  return originalFetch(query, params, options);
}
