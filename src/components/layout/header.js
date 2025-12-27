"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadCat from "../icon/logo/headcat-logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href={"#"}
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-accent transition-colors flex"
        >
          <HeadCat />
          <span className="text-accent">.blog</span>
        </Link>
        <nav className="space-x-6 text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-all transition-discrete">
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? "font-bold text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            }
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={
              pathname === "/about"
                ? "font-bold text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            }
          >
            Sobre mim
          </Link>
          <Link
            href={"#"}
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Portfólio
          </Link>
        </nav>
      </div>
    </header>
  );
}
