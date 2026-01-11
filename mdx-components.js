import Image from "next/image";

const components = {
  // Títulos com Tailwind
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 dark:border-neutral-800">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-xl font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 not-first:mt-6 text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  ),
  li: ({ children }) => (
    <li className="text-neutral-800 dark:text-neutral-400">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-neutral-700 dark:text-neutral-300">
      {children}
    </strong>
  ),
  // Imagem otimizada do Next.js
  img: (props) => (
    <Image
      width={800}
      height={450}
      className="rounded-lg border border-neutral-200 my-8"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
      alt={props.alt || "Blog image"}
    />
  ),
  blockquote: ({children}) =>  (
    <blockquote className="px-6 pr-4 border-l-4 border-indigo-400 italic text-neutral-700 my-8 py-0.5 bg-neutral-300/50 dark:bg-neutral-800/50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="bg-neutral-800">
      <code>{children}</code>
    </pre>
  ),
  // Exemplo de componente customizado que você pode usar no MDX
  callout: ({ children }) => (
    <div className="my-6 flex items-start rounded-md border border-l-4 border-l-blue-500 bg-blue-50 p-4 dark:bg-neutral-900">
      <div className="text-blue-700 dark:text-blue-400">{children}</div>
    </div>
  ),
};

export function useMDXComponents() {
  return components;
}
