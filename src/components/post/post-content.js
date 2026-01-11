
/**
 * Componente para exibir o conteúdo do post com estilos Tailwind Typography
 */
export function PostContent({ children }) {
  return (
    <article className="prose sm:prose-sm md:prose-lg lg:prose-xl prose-neutral dark:prose-invert max-w-none">
      {children}
    </article>
  );
}

