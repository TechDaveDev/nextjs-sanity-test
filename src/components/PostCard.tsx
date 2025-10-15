import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../lib/types';
import { urlFor } from '../lib/sanity';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug.current}`} className="block group border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="relative w-full h-48">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(500).height(300).url()}
            alt={`Imagen de portada para ${post.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Sin imagen</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="text-sm text-gray-500">
          {new Date(post._createdAt).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </div>
    </Link>
  );
}
