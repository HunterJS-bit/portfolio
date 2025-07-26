import { Navigation } from '@/app/components/Navigation';
import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { Work } from './components/OurWorkSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
