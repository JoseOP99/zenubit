import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, floatAnimation } from '../utils/animations';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';

const Hero = () => {
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
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conversemos &rarr;</a>
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
