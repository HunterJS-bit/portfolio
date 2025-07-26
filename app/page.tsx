import { Navigation } from '@/app/components/Navigation';
import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { Work } from './components/OurWorkSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Work />
      <Contact />
      <div className="w-full border-t border-border/50 py-5">
      <p className="text-center text-muted-foreground leading-relaxed">© 2025 John Doe. All Rights Reserved.</p>
      </div>
    </div>
  );
}
