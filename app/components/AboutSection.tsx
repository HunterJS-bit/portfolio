import { AnimatedSection } from "./AnimatedSection";

interface AboutProps {
  delay?: number;
}

export const About = ({ delay = 0 }: AboutProps) => {
  return (
    <section id="about" className="pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="max-w-3xl" delay={delay}>
          <h1 className="text-5xl md:text-6xl font-medium mb-10 leading-[1.1] tracking-tight text-gradient">
            Software engineer designing tools for thought.
          </h1>

          <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-8 max-w-none">
            <p className="text-xl leading-relaxed">
              I&apos;m currently building at{" "}
              <a
                href="https://www.datadoghq.com"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datadog
              </a>. Helped organizations implement clean architecture and effective solutions. I'm also building open‑source projects to experiment, learn, and contribute back to the community
            </p>

            <div className="grid sm:grid-cols-2 gap-12 pt-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/50">Experience</h3>
                <ul className="space-y-6">
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">DataDog</div>
                    <div className="text-sm">Software Engineer • Present</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Nokia</div>
                    <div className="text-sm">Full Stack Developer • 2021 — 2023</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">OMV</div>
                    <div className="text-sm">JavaScript Developer • 2017 — 2021</div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/50">Focus</h3>
                <ul className="space-y-6">
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Product Design</div>
                    <div className="text-sm">Creating cloud native solutions for complex workflows.</div>
                  </li>
                  <li className="group">
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Distributed Systems</div>
                    <div className="text-sm">Building fault‑tolerant microservices and event‑driven architectures</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}