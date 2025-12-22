import { formatDate } from "@/utils/date";

/**
 * Componente para exibir tags de um post
 */
export function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
        >
          {tag}
        </span>
      ))}
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
    <div className="flex items-center justify-between">
      <PostDate date={publishedAt} />
      <PostTags tags={tags} />
    </div>
  );
}
