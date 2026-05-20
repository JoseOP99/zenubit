import React from 'react';
import logoZenubit from '../assets/logoZenubit.png';

const CTA = () => {
  return (
    <section className="cta-section glow-bg" id="contacto">
      <img src={logoZenubit} alt="Zenubit Logo" className="cta-logo" />
      <h2 className="cta-title">¿Listo para <em className="poetic">automatizar</em><br />lo que aún haces a mano?</h2>
      <p className="cta-sub">
        Conversemos 30 minutos. Te mostramos qué procesos de tu operación se pueden automatizar y cuánto te ahorrarías — sin costo, sin compromiso.
      </p>
      <div className="cta-buttons">
        <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Consulta &rarr;</a>
        <a href="#servicios" className="btn btn-outline">Ver Servicios</a>
      </div>
    </section>
  );
};

export default CTA;
