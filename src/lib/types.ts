import type { PortableTextBlock } from '@portabletext/types';
import type { Image as SanityImage } from 'sanity';

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };

  mainImage: SanityImage;

  body: PortableTextBlock[];

  excerpt?: string;
}

