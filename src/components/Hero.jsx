import logo from '../assets/logoZenubit.webp';

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-content">
        <h1 className="hero-title">Páginas web y <em>automatización.</em></h1>
        <p className="hero-desc">
          Diseñamos tu página web y automatizamos los procesos de tu negocio con Power Platform,
          AppSheet e inteligencia artificial. Desde Tuchín, Córdoba.
        </p>
        <div className="hero-ctas">
          <a href="#contacto" className="btn btn-primary">Cuéntanos tu proyecto →</a>
          <a href="#servicios" className="btn btn-outline">Ver servicios</a>
          <a href="https://wa.link/6fdprv" className="hero-whatsapp">WhatsApp ↗</a>
        </div>
      </div>
      <figure className="hero-visual">
        <img src={logo} alt="" width="320" height="320" fetchPriority="high" />
        <figcaption>Automatización con alma. Código con raíces.</figcaption>
      </figure>
    </section>
  );
}
