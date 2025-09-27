import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '5exg4u9n',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-09-26',
})