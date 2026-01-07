import { Section } from "./Section";

export const About = () => {
  return (
    <section id="about" className="pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Section className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-medium mb-10 leading-[1.1] tracking-tight text-gradient">
            Software engineer designing tools for thought.
          </h1>

          <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-8 max-w-none">
            <p className="text-xl leading-relaxed">
              I&apos;m currently building at{" "}
              <a
                href="https://clarivate.com"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clarivate
              </a>. Previously, I&apos;ve helped organizations make sense of complex information at Nokia and founded social platforms for discovery.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 pt-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/50">Experience</h3>
                <ul className="space-y-6">
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Clarivate</div>
                    <div className="text-sm">Software Engineer • Present</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Nokia</div>
                    <div className="text-sm">Full Stack Developer • 2021 — 2023</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Scout</div>
                    <div className="text-sm">Founder • 2019 — 2021</div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/50">Focus</h3>
                <ul className="space-y-6">
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Product Design</div>
                    <div className="text-sm">Creating intuitive interfaces for complex workflows.</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Frontend Architecture</div>
                    <div className="text-sm">Building scalable, performant web applications.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  )
}