import Link from "next/link";
import Github from "../icon/github";
import Twitter from "../icon/twitter";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 dark:bg-neutral-800  dark:border-neutral-700">
      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-500 text-sm">
          © 2023 CatBlog. Todos os direitos.
        </p>
        <div className="flex space-x-6">
          <Link
            href={"#"}
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Github className="size-6" />
          </Link>
          <Link
            href={"#"}
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Twitter className="size-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
