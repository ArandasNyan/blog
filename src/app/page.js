import { PostCard } from "@/components/post/post-card";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();

  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8">Meu Blog</h1>
      <div className="space-y-8 divide-y divide-neutral-300 dark:divide-neutral-800">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            summary={post.summary}
            publishedAt={post.publishedAt}
            tags={post.tags}
          />
        ))}
      </div>
    </main>
  );
}
