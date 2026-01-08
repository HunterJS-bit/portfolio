import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { LatestPostsSection } from './components/LatestPostsSection';
import { AnimatedSection } from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="flex flex-col gap-20 py-20">
      <About />
      <LatestPostsSection delay={0.2} />
      <AnimatedSection delay={0.4}>
        <Contact />
      </AnimatedSection>
    </main>
  );
}
