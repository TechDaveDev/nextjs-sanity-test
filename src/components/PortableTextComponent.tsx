import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity';
import Image from 'next/image';
import type { PortableTextBlock } from '@portabletext/types';
import type { Image as SanityImage } from 'sanity';
import type { ReactNode } from 'react';


interface SanityImageWithValue extends SanityImage {
  alt?: string;
}

interface BlockProps {
  children?: ReactNode;
}

interface MarkProps {
  children?: ReactNode;
  value?: {
    href?: string;
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageWithValue }) => (
      <div className="my-8 relative w-full h-96">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Imagen del post'}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: BlockProps) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }: BlockProps) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }: BlockProps) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    blockquote: ({ children }: BlockProps) => <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600">{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }: MarkProps) => {
      const rel = value?.href && !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value?.href} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
  },
};

interface PortableTextComponentProps {
  content: PortableTextBlock[];
}

export default function PortableTextComponent({ content }: PortableTextComponentProps) {
  return <PortableText value={content} components={portableTextComponents} />;
}

