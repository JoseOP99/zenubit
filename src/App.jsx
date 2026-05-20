import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Origin from './components/Origin';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Smooth Scrolling and Mouse Glow Interaction
  useEffect(() => {
    // Smooth scroll handler
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    // Mouse movement handler for glowing cursor spotlight
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="mouse-glow"></div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Origin />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
