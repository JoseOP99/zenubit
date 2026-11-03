import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="container projects-section">
      <h2 className="sec-title">Ideas que se convierten en <em className="poetic">proyectos.</em></h2>
      {projects.length ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              {project.image && <img src={project.image} alt={project.imageAlt || project.title}
                loading="lazy" decoding="async" width="960" height="600" />}
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a>}
            </article>
          ))}
        </div>
      ) : (
        <div className="projects-empty">
          <p>Estamos preparando una selección de nuestros trabajos para compartirla aquí.</p>
          <a className="service-contact" href="#contacto">Cuéntanos qué quieres construir ↗</a>
        </div>
      )}
    </section>
  );
}
