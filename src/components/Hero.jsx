import React, { useEffect } from 'react';
import logoZenubit from '../assets/logoZenubit.png';

const Hero = () => {
  useEffect(() => {
    const glowNodes = document.querySelectorAll('.hero-visual .glow-node');
    glowNodes.forEach(node => {
      const randomDelay = Math.random() * 2;
      node.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <section className="container hero glow-bg">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="glow-node" style={{ position: 'relative', display: 'inline-block', animation: 'none', boxShadow: 'none' }}></span>
          System Active &middot; Tuchin &middot; Colombia
        </div>
        
        <h1 className="hero-title t-hero">
          Automatización<br />
          con <em className="poetic">alma</em>.<br />
          Código con <span className="line-cyan poetic">raíces</span>.
        </h1>
        
        <p className="hero-desc">
          Construimos soluciones de automatización inteligente para empresas — desde flujos en Power Platform hasta apps con AppSheet y desarrollo asistido con IA. Tecnología precisa, hecha con la calma del tejedor.
        </p>
        
        <div className="tags-row">
          <span className="tag active">Power Platform</span>
          <span className="tag active">AppSheet</span>
          <span className="tag active">Vibecode &middot; AI</span>
          <span className="tag active">RPA</span>
          <span className="tag">Power Automate</span>
          <span className="tag">Power Apps</span>
        </div>
        
        <div className="hero-ctas">
          <a href="#contacto" className="btn btn-primary">Agendar Consulta &rarr;</a>
          <a href="#servicios" className="btn btn-outline">Ver Servicios</a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="ring"></div>
        <div className="ring ring-outer"></div>
        
        <div className="glow-node" style={{ top: '20%', left: '50%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '20%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '80%' }}></div>
        <div className="glow-node" style={{ top: '80%', left: '50%' }}></div>
        <div className="glow-node" style={{ top: '50%', left: '50%', animationDelay: '1.5s' }}></div>
        
        <img src={logoZenubit} alt="Zenubit Logo" className="hero-logo-img" />
      </div>
    </section>
  );
};

export default Hero;
