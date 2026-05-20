import React from 'react';
import logoZenubit from '../assets/logoZenubit.png';

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="nav-left">
        <img src={logoZenubit} alt="Zenubit Símbolo" />
        <span className="nav-wordmark">Zenubit</span>
      </a>
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
    </nav>
  );
};

export default Navbar;
