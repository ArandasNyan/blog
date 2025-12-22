import Link from "next/link";
import { PostMeta } from "@/components/post/post-meta";

/**
 * Componente para exibir um post no feed/lista de posts
 */
export function PostCard({ slug, title, summary, publishedAt, tags }) {
  return (
    <div className="-mx-4">
      <Link
        href={`/posts/${slug}`}
        className="block group pb-6 transition rounded px-4 py-2"
      >
        <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-2">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
          {summary}
        </p>
        <PostMeta publishedAt={publishedAt} tags={tags} />
      </Link>
    </div>
  );
}
