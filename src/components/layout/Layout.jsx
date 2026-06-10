import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';
import { useMouseGlow } from '../../hooks/useMouseGlow';

const Layout = ({ children }) => {
  // Initialize the optimized mouse glow effect
  useMouseGlow();

  return (
    <div className="app-container">
      <div className="mouse-glow" aria-hidden="true"></div>
      <div className="stars-container" aria-hidden="true">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
