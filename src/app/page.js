import { PostCard } from "@/components/post/post-card";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();

  return (
    <main className="max-w-3xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold mb-2">
        Escrevendo sobre tecnologia, cotidiano e novos aprendizados.
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12">
      Bem-vindo ao meu espaço! Aqui eu transformo pensamentos em aprendizado, aprimoro a clareza na comunicação e compartilho conhecimento de forma honesta.
      </p>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={post.slug}>
            <PostCard
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              publishedAt={post.publishedAt}
              tags={post.tags}
            />

            {index < posts.length - 1 && (
              <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
