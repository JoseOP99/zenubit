import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="nav-wordmark">Zenubit</span>
          <p className="footer-desc">
            Automatización con alma. Código con raíces. Tecnología precisa, hecha con la calma del tejedor.
          </p>
        </div>
        
        <div>
          <h4 className="footer-heading">Servicios</h4>
          <ul className="footer-links">
            <li><a href="#servicios">Power Platform</a></li>
            <li><a href="#servicios">AppSheet</a></li>
            <li><a href="#servicios">Vibecode &amp; AI</a></li>
            <li><a href="#servicios">RPA &amp; Procesos</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="footer-heading">Empresa</h4>
          <ul className="footer-links">
            <li><a href="#proceso">Metodología</a></li>
            <li><a href="#casos">Casos de Éxito</a></li>
            <li><a href="#origen">Nuestro Origen</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-links">
            <li><a href="mailto:hola@zenubit.com">hola@zenubit.com</a></li>
            <li><a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/in/joseortizp" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/JoseOP99" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.youtube.com/@zenubit" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://www.instagram.com/zenubit/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61579270679642" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><span>Tuchin &middot; Córdoba &middot; Colombia</span></li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span>&copy; 2026 Zenubit. Todos los derechos reservados.</span>
        <span>TECNOLOGÍA &middot; TUCHIN &middot; COLOMBIA</span>
      </div>
    </footer>
  );
};

export default Footer;
