import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/posts");

/**
 * Extrai o frontmatter de um arquivo MDX
 * @param {string} slug - Slug do post
 * @returns {Promise<Object>} Dados do frontmatter
 */
export async function getFrontmatter(slug) {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data;
  } catch (error) {
    console.error(`Erro ao extrair frontmatter para slug "${slug}":`, error);
    throw error;
  }
}

/**
 * Remove o frontmatter YAML de um conteúdo MDX
 * Retorna apenas o conteúdo markdown/JSX sem o bloco de configuração
 * @param {string} mdxContent - Conteúdo MDX completo
 * @returns {string} Conteúdo limpo sem frontmatter
 */
export function stripFrontmatter(mdxContent) {
  const { content } = matter(mdxContent);
  return content;
}
