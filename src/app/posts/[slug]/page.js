import { notFound } from "next/navigation";
import { PostContent } from "@/components/post/post-content";
import { PostHeader } from "@/components/post/post-header";
import { getPosts } from "@/lib/posts";
import { getFrontmatter } from "@/utils/mdx-cleaner";

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  try {
    // Extrai o frontmatter do arquivo MDX
    const frontmatter = await getFrontmatter(slug);

    // Importa o componente MDX compilado pelo Next.js
    const { default: Post } = await import(
      `@/content/posts/${slug}.mdx`
    );

    return (
      <main className="max-w-3xl mx-auto py-12 px-6">
        <PostHeader
          title={frontmatter?.title}
          publishedAt={frontmatter?.publishedAt}
          tags={frontmatter?.tags}
          readingTime={frontmatter?.readingTime}
        />
        <PostContent>
          <Post />
        </PostContent>
      </main>
    );
  } catch (error) {
    console.error("Erro ao carregar o post:", error);
    notFound();
  }
}

export const dynamicParams = false;
