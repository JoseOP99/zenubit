import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoZenubit from '../assets/logoZenubit.png';
import { mobileMenuVariants } from '../utils/animations';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav>
        <a href="#" className="nav-left">
          <img src={logoZenubit} alt="Zenubit Símbolo" />
          <span className="nav-wordmark">Zenubit</span>
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#proceso" className="nav-link">Proceso</a>
          <a href="#casos" className="nav-link">Casos</a>
          <a href="#origen" className="nav-link">Origen</a>
          <a href="#contacto" className="nav-link">Contacto</a>
          <a href="#contacto" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            Agendar &rarr;
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="mobile-menu-content">
              <a href="#servicios" className="mobile-link" onClick={toggleMenu}>Servicios</a>
              <a href="#proceso" className="mobile-link" onClick={toggleMenu}>Proceso</a>
              <a href="#casos" className="mobile-link" onClick={toggleMenu}>Casos</a>
              <a href="#origen" className="mobile-link" onClick={toggleMenu}>Origen</a>
              <a href="#contacto" className="mobile-link" onClick={toggleMenu}>Contacto</a>
              <a href="#contacto" className="btn btn-primary mobile-btn" onClick={toggleMenu}>
                Agendar &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
