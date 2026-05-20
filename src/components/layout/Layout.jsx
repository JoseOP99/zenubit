import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useMouseGlow } from '../../hooks/useMouseGlow';

const Layout = ({ children }) => {
  // Initialize the optimized mouse glow effect
  useMouseGlow();

  return (
    <div className="app-container">
      <div className="mouse-glow" aria-hidden="true"></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
