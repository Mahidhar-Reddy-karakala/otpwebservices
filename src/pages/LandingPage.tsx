import Features from '@/pages/features';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import Footer from '@/pages/footer';
import { Navbar } from '@/pages/Navbar';
import { Home } from '@/pages/sectionHome';
import Documentation from '@/pages/sectionDocs';

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Documentation />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
