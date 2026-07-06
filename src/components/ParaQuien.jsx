import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const enfoques = [
  {
    num: "01",
    title: "Presencia digital",
    desc: "Página web y presencia digital profesional que refleja la identidad de tu marca y genera confianza desde el primer contacto.",
    tags: ["Sitios Web", "Branding Digital", "SEO"]
  },
  {
    num: "02",
    title: "Automatización de procesos",
    desc: "Integramos tus herramientas y flujos de trabajo en un solo ecosistema digital que elimina tareas repetitivas y reduce errores.",
    tags: ["Automatización", "Integraciones", "Dashboards"]
  },
  {
    num: "03",
    title: "Escalamiento y analítica",
    desc: "Arquitecturas robustas, gobierno de datos y automatización a escala para operaciones de alto volumen.",
    tags: ["Power Platform", "RPA", "BI & Analítica"]
  }
];

const ParaQuien = () => {
  return (
    <section id="enfoque" className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          <span className="glow-node glow-node-inline"></span>
          CÓMO TRABAJAMOS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Soluciones diseñadas <em className="poetic">a la medida</em> de tu negocio.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">
          Cada proyecto parte de un diagnóstico real de tu operación, para proponer una solución con el alcance y la inversión adecuados. Cada propuesta se ajusta al presupuesto de tu proyecto.
        </motion.p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {enfoques.map((item) => (
          <motion.div
            key={item.num}
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="service-card"
          >
            <div className="service-num">{item.num}</div>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
            <div className="service-tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="enfoque-cta"
      >
        <a href="#contacto" className="btn btn-primary">Cotización gratuita &rarr;</a>
      </motion.div>
    </section>
  );
};

export default ParaQuien;
