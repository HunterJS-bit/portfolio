import { About } from '@/app/components/AboutSection';
import { Contact } from '@/app/components/Contact';
import { Work } from './components/OurWorkSection';
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
