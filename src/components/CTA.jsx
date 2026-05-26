import React from 'react';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';

const CTA = () => {
  return (
    <section className="cta-section glow-bg" id="contacto">
      <picture>
        <source srcSet={logoZenubitWebP} type="image/webp" />
        <img src={logoZenubit} alt="Zenubit" className="cta-logo" />
      </picture>
      <h2 className="cta-title">¿Listo para <em className="poetic">automatizar</em>?</h2>
      <p className="cta-sub">
        Conversemos 30 minutos. Te mostramos qué procesos se pueden automatizar y cuánto te ahorrarías — sin costo.
      </p>
      <div className="cta-buttons">
        <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conversemos &rarr;</a>
      </div>
    </section>
  );
};

export default CTA;
