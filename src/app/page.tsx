import { getPosts } from '../lib/sanity';
import PostCard from '../components/PostCard';
import Header from '../components/Header';

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Bienvenido a mi Blog
          </h1>
          <p className="text-lg text-gray-600">
            Explora artículos sobre tecnología, desarrollo y más.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No hay posts todavía. ¡Vuelve pronto!</p>
          </div>
        )}
      </main>
    </>
  );
}
