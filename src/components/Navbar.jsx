import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';
import { mobileMenuVariants } from '../utils/animations';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scroll suave al formulario de contacto
  const handleConversemos = (e) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById('contacto');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll Down - Hide Navbar
        setShowNavbar(false);
      } else {
        // Scroll Up - Show Navbar
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={!showNavbar ? 'nav-hidden' : ''}>
        <Link to="/" className="nav-left">
          <picture>
            <source srcSet={logoZenubitWebP} type="image/webp" />
            <img src={logoZenubit} alt="Zenubit - Automatización inteligente" />
          </picture>
          <span className="glow-node glow-node-inline" style={{ width: '6px', height: '6px' }}></span>
          <span className="nav-wordmark">Zenubit</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links">
          {isHome ? (
            <>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#proceso" className="nav-link">Proceso</a>
              <a href="#herramientas" className="nav-link">Herramientas</a>
              <a href="#origen" className="nav-link">Origen</a>
            </>
          ) : (
            <Link to="/" className="nav-link">Inicio</Link>
          )}
          <Link to="/talento-local" className={`nav-link ${location.pathname === '/talento-local' ? 'nav-link-active' : ''}`}>
            Talento Local
          </Link>
          <a
            href="/#contacto"
            onClick={handleConversemos}
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '12px' }}
          >
            Conversemos &rarr;
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
              {isHome ? (
                <>
                  <a href="#servicios" className="mobile-link" onClick={toggleMenu}>Servicios</a>
                  <a href="#proceso" className="mobile-link" onClick={toggleMenu}>Proceso</a>
                  <a href="#herramientas" className="mobile-link" onClick={toggleMenu}>Herramientas</a>
                  <a href="#origen" className="mobile-link" onClick={toggleMenu}>Origen</a>
                </>
              ) : (
                <Link to="/" className="mobile-link" onClick={toggleMenu}>Inicio</Link>
              )}
              <Link to="/talento-local" className="mobile-link" onClick={toggleMenu}>Talento Local</Link>
              <a
                href="/#contacto"
                onClick={handleConversemos}
                className="btn btn-primary mobile-btn"
              >
                Conversemos &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
