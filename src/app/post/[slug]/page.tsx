import { getPostBySlug } from '../../../lib/sanity';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import PortableTextComponent from '../../../components/PortableTextComponent';
import Image from 'next/image';
import { urlFor } from '../../../lib/sanity';

export const revalidate = 60;

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">
            Publicado el {new Date(post._createdAt).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          {post.mainImage && (
            <div className="relative w-full h-64 md:h-96 mb-8">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={`Imagen principal para ${post.title}`}
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-a:text-blue-600 prose-blockquote:border-l-blue-600">
            <PortableTextComponent content={post.body} />
          </div>
        </article>
      </main>
    </>
  );
}
