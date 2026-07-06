import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, floatAnimation } from '../utils/animations';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.473 1.332 4.978L2 22l5.176-1.356c1.442.786 3.07 1.2 4.824 1.2 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.208 14.154c-.255.72-1.464 1.31-2.022 1.39-.48.07-1.104.11-3.23-.77-2.72-1.12-4.46-3.89-4.59-4.07-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.92.91-2.18.24-.26.52-.33.7-.33.17 0 .35 0 .5.01.16 0 .37-.06.57.43.2.5.7 1.71.76 1.83.06.12.1.26.02.42-.08.17-.18.28-.3.42-.12.14-.26.31-.37.42-.12.12-.25.26-.1.52.14.25.64 1.07 1.38 1.73.95.85 1.75 1.11 2 1.22.25.11.4.1.55-.07.15-.17.65-.76.82-.99.17-.24.34-.2.57-.11.24.09 1.5.71 1.76.84.26.13.43.2.49.31.06.11.06.64-.19 1.36z" />
  </svg>
);

const Hero = () => {
  const handleConversemos = (e) => {
    e.preventDefault();
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="container hero glow-bg">
      <motion.div
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} className="eyebrow">
          <span className="glow-node glow-node-inline"></span>
          Tuchin &middot; Córdoba &middot; Colombia
        </motion.div>

        <motion.h1 variants={fadeInUp} className="hero-title t-hero">
          Automatización<br />
          con <em className="poetic">alma</em>.<br />
          Código con <span className="line-cyan poetic">raíces</span>.
        </motion.h1>

        <motion.p variants={fadeInUp} className="hero-desc">
          Diseñamos páginas web y automatizamos procesos con inteligencia artificial y Power Platform. Transformación digital a la medida de tu negocio, con una inversión ajustada a tus objetivos.
        </motion.p>

        <motion.div variants={fadeInUp} className="tags-row">
          <span className="tag active">Páginas Web</span>
          <span className="tag active">Power Platform</span>
          <span className="tag active">AppSheet</span>
          <span className="tag active">Vibe Coding &middot; AI</span>
          <span className="tag active">RPA</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="hero-ctas">
          <a href="#contacto" onClick={handleConversemos} className="btn btn-primary">Conversemos &rarr;</a>
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="Contactar por WhatsApp">
            <IconWhatsApp />
            WhatsApp
          </a>
          <a href="#servicios" className="btn btn-outline">Ver Servicios</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        variants={floatAnimation}
        animate="animate"
      >
        <div className="ring"></div>
        <div className="ring ring-outer"></div>

        <picture>
          <source srcSet={logoZenubitWebP} type="image/webp" />
          <img src={logoZenubit} alt="Zenubit - Automatización inteligente desde Tuchin, Colombia" className="hero-logo-img" />
        </picture>
      </motion.div>
    </section>
  );
};

export default Hero;
