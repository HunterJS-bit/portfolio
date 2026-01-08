import { About } from '@/app/components/AboutSection';
import { DynamicContact as Contact } from '@/app/components/DynamicContact';
import { LatestPostsSection } from './components/LatestPostsSection';
import { DynamicAnimatedSection as AnimatedSection } from './components/DynamicAnimatedSection';

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
