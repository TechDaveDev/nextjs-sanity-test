import { groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { Post } from './types';
import { client } from '../../sanity/client';

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getPosts(): Promise<Post[]> {
  const query = groq`*[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
  }`;
  return client.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    body
  }`;
  return client.fetch(query, { slug });
}
