import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="nav-wordmark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-node glow-node-inline" style={{ width: '6px', height: '6px' }}></span>
            Zenubit
          </span>
          <p className="footer-desc" style={{ marginTop: '16px' }}>
            Automatización con alma. Código con raíces.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Servicios</h4>
          <ul className="footer-links">
            <li><a href="#servicios">Power Platform</a></li>
            <li><a href="#servicios">AppSheet</a></li>
            <li><a href="#servicios">Web & AI</a></li>
            <li><a href="#servicios">RPA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Empresa</h4>
          <ul className="footer-links">
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#herramientas">Herramientas</a></li>
            <li><a href="#origen">Origen</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-links">
            <li style={{ color: 'var(--cream-dim)' }}>Tuchin &middot; Córdoba &middot; Colombia</li>
            <li><a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Zenubit. Todos los derechos reservados.</span>
        <div className="footer-bottom-meta">
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="WhatsApp" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.473 1.332 4.978L2 22l5.176-1.356c1.442.786 3.07 1.2 4.824 1.2 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.208 14.154c-.255.72-1.464 1.31-2.022 1.39-.48.07-1.104.11-3.23-.77-2.72-1.12-4.46-3.89-4.59-4.07-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.92.91-2.18.24-.26.52-.33.7-.33.17 0 .35 0 .5.01.16 0 .37-.06.57.43.2.5.7 1.71.76 1.83.06.12.1.26.02.42-.08.17-.18.28-.3.42-.12.14-.26.31-.37.42-.12.12-.25.26-.1.52.14.25.64 1.07 1.38 1.73.95.85 1.75 1.11 2 1.22.25.11.4.1.55-.07.15-.17.65-.76.82-.99.17-.24.34-.2.57-.11.24.09 1.5.71 1.76.84.26.13.43.2.49.31.06.11.06.64-.19 1.36z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/joseortizp" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com/JoseOP99" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="GitHub" aria-label="GitHub">
            <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.facebook.com/zenubit" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.youtube.com/@zenubit" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="YouTube" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.instagram.com/zenubit" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
