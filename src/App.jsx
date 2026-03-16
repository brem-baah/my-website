import { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import RainEffect from './components/RainEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import Gallery from './components/Gallery';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 120);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <RainEffect dropCount={80} />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Methodology />
            <Skills />
            <Experience />
            <Projects />
            <Gallery />
            {/* <OpenSource /> */}
            <Testimonials />
            <Blog />
            <Brands />
            <Contact />
          </main>
          <Footer />
          <WhatsAppBtn />
          <BackToTop />
        </>
      )}
    </>
  );
}
