import logo from '../assets/logoZenubit.webp';

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-content">
        <p className="eyebrow">Tuchín · Córdoba · Colombia</p>
        <h1 className="hero-title">
          Automatización con <em>alma.</em><br />
          Código con <em>raíces.</em>
        </h1>
        <p className="hero-desc">
          Diseñamos páginas web y automatizamos procesos con inteligencia artificial y Power Platform.
          Transformación digital a la medida de tu negocio.
        </p>
        <div className="hero-ctas">
          <a href="#contacto" className="btn btn-primary">Cuéntanos tu idea →</a>
          <a href="#servicios" className="btn btn-outline">Ver servicios</a>
        </div>
      </div>
      <figure className="hero-visual">
        <span className="brand-orbit" aria-hidden="true" />
        <img src={logo} alt="Zenubit" width="320" height="320" fetchPriority="high" />
      </figure>
    </section>
  );
}
