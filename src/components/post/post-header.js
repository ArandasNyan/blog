import { PostDate, PostTags } from "@/components/post/post-meta";

/**
 * Componente para exibir o cabeçalho de um post individual
 */
export function PostHeader({ title, publishedAt, tags }) {
  return (
    <header className="mb-8">
      {title && (
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          {title}
        </h1>
      )}
      <div className="space-y-4">
        <PostDate date={publishedAt} />
        <PostTags tags={tags} />
      </div>
    </header>
  );
}
