import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { Work } from './components/OurWorkSection';
import { AnimatedSection } from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="flex flex-col gap-20 py-20">
      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Work />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <Contact />
      </AnimatedSection>
    </main>
  );
}
