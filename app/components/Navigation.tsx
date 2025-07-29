
"use client";
import Link from 'next/link';
import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';

export const Navigation = () => {

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">
            <Link href="/" className="hover:text-muted-foreground transition-colors">
              john doe
            </Link>
          </h1>
          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              about
            </Link>
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              work
            </a>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact
            </Link>
          </div>
          <button
            onClick={changeTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}