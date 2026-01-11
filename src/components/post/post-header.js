import { PostDate, PostTags } from "@/components/post/post-meta";
import { TextBar } from "../ui/text-bar";

/**
 * Componente para exibir o cabeçalho de um post individual
 */
export function PostHeader({ title, publishedAt, tags, readingTime }) {
  return (
    <header className="mb-10">
      <div className="space-y-4 font-mono uppercase flex gap-x-2">
        <PostTags tags={tags} />
        <TextBar />
        <PostDate date={publishedAt} />
        <TextBar />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{readingTime} min de leitura</p>
      </div>
      {title && (
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 mb-6">
          {title}
        </h1>
      )}
      <hr className="my-6 border-neutral-200 dark:border-neutral-800 content" />
      <div className="flex gap-x-4">
        <div className="size-10 bg-indigo-200 dark:bg-indigo-200/15 rounded-full flex items-center justify-center text-lg font-bold text-indigo-600 dark:text-indigo-400">EV</div>
        <div className="text-sm">
          <p className="antialised font-bold text-neutral-800 dark:text-neutral-300">Arandas Dev</p>
          <p className="font-medium text-neutral-600 dark:text-neutral-500">Engenheiro de Software</p>
        </div>
      </div>
    </header>
  );
}
