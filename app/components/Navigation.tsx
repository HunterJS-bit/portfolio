


export const Navigation = () => {
    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">
              <a href="/" className="hover:text-muted-foreground transition-colors">
                john doe
              </a>
            </h1>

            <div className="flex items-center gap-8">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                about
              </a>
              <a
                href="#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                work
              </a>
              <a
                href="#blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                blog
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}