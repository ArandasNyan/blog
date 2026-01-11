import { formatDate } from "@/utils/date";

/**
 * Componente para exibir tags de um post
 */
export function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <span
        key={tags}
        className="text-sm uppercase text-indigo-600 dark:text-indigo-400 rounded"
      >
        {tags}
      </span>
    </div>
  );
}

/**
 * Componente para exibir data de publicação
 */
export function PostDate({ date, className = "" }) {
  if (!date) return null;

  return (
    <time
      className={`text-sm text-neutral-500 dark:text-neutral-400 ${className}`}
    >
      {formatDate(date)}
    </time>
  );
}

/**
 * Componente para exibir metadados do post (data e tags)
 */
export function PostMeta({ publishedAt, tags }) {
  return (
    <div className="flex items-center justify-start gap-2 font-mono mb-4">
      <PostDate date={publishedAt} />
      <div className="size-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
      <PostTags tags={tags} />
    </div>
  );
}
