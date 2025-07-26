export const About = () => {
    return (
        <section id="about" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
            software engineer at{" "}
            <a 
              href="https://notion.so" 
              className="underline decoration-2 underline-offset-4 hover:text-muted-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              clarivate
            </a>
          </h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              I design tools for thought at Clarivate. Previously:
            </p>
            
            <ul className="space-y-3">
              <li>
                <strong className="text-foreground">Nokia</strong> — Built tools for government and commercial institutions. 
                Worked on data visualization platforms that helped organizations make sense of complex information.
              </li>
              <li>
                <strong className="text-foreground">Scout</strong> — Founded a social network for bookmarking 
                and recommending places.
              </li>
              <li>
                <strong className="text-foreground">IDEA</strong> — Fellow in the London studio, led design sprints 
                with Fortune 500 customers.
              </li>
              <li>
                <strong className="text-foreground">Acorns</strong> — Joined as the 4th designer, launched 
                Found Money among other things.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}