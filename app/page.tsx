import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { Work } from './components/OurWorkSection';

export default function Home() {
  return (
    <>
      <About />
      <Work />
      <Contact />
    </>
  );
}
