import { client } from '../../sanity/client';

type Post = {
  _id: string;
  title: string;
};

export default async function HomePage() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Mi Blog desde Sanity</h1>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id} className="text-xl mb-2">
              {post.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay posts todavía. ¡Crea uno en tu Sanity Studio!</p>
      )}
    </main>
  );
}