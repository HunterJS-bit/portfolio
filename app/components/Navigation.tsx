import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">
            <Link href="/" className="hover:text-muted-foreground transition-colors">
              john doe
            </Link>
          </h1>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                about
              </Link>
              <Link
                href="/work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                work
              </Link>
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}