import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/posts");

/**
 * Obtém e processa todos os posts MDX
 * @returns {Array} Array de posts ordenados por data (mais recentes primeiro)
 */
export function getPosts() {
  const files = fs.readdirSync(POSTS_PATH);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: data.slug || file.replace(/\.mdx$/, ""),
        title: data.title || "Post sem título",
        summary: data.summary || "",
        publishedAt: data.publishedAt || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
