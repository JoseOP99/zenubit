import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, floatAnimation } from '../utils/animations';
import logoZenubit from '../assets/logoZenubit.png';

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
          <span className="glow-node" style={{ position: 'relative', display: 'inline-block', animation: 'none', boxShadow: 'none' }}></span>
          System Active &middot; Tuchin &middot; Colombia
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="hero-title t-hero">
          Zenubit: Automatización<br />
          con <em className="poetic">alma</em>.<br />
          Código con <span className="line-cyan poetic">raíces</span>.
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="hero-desc">
          Construimos soluciones de automatización inteligente para empresas — desde flujos en Power Platform hasta apps con AppSheet y desarrollo asistido con IA. Tecnología precisa, hecha con la calma del tejedor.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="tags-row">
          <span className="tag active">Power Platform</span>
          <span className="tag active">AppSheet</span>
          <span className="tag active">Vibecode &middot; AI</span>
          <span className="tag active">RPA</span>
          <span className="tag">Power Automate</span>
          <span className="tag">Power Apps</span>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="hero-ctas">
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Consulta &rarr;</a>
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
        
        <div className="glow-node" style={{ top: '20%', left: '50%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '20%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '80%' }}></div>
        <div className="glow-node" style={{ top: '80%', left: '50%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '50%', animationDelay: '1.5s' }}></div>
        
        <img src={logoZenubit} alt="Zenubit - Automatización inteligente desde Tuchin, Colombia" className="hero-logo-img" width={300} height={340} />
      </motion.div>
    </section>
  );
};

export default Hero;
