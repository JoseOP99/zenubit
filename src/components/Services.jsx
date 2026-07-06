import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const services = [
  {
    num: "01",
    title: "Páginas Web & Transformación Digital",
    desc: "Sitios y plataformas web modernas, con diseño a medida y una inversión ajustada a los objetivos de tu negocio.",
    tags: ["Sitios Web", "Landing Pages", "E-commerce"]
  },
  {
    num: "02",
    title: "Power Platform",
    desc: "Ecosistemas completos con Power Automate, Power Apps, Power BI y Dataverse para conectar tu negocio.",
    tags: ["Power Automate", "Power Apps", "Power BI"]
  },
  {
    num: "03",
    title: "AppSheet & No-Code",
    desc: "Apps móviles y web sin código, con diseño personalizado. Integración directa con tus datos existentes.",
    tags: ["AppSheet", "No-Code", "Google Sheets"]
  },
  {
    num: "04",
    title: "Vibe Coding & AI",
    desc: "Desarrollo web asistido con IA, integraciones entre plataformas web y apps no-code, dashboards y portales.",
    tags: ["React", "OpenAI", "Integraciones"]
  },
  {
    num: "05",
    title: "Automatización & RPA",
    desc: "Eliminamos tareas manuales con flujos automatizados, bots de facturación, reportes y conciliaciones.",
    tags: ["UiPath", "Webhooks", "APIs"]
  },
  {
    num: "06",
    title: "Business Intelligence & Reportes",
    desc: "Tableros y reportes que convierten tus datos en decisiones, con visualización clara y actualización en tiempo real.",
    tags: ["Power BI", "Looker Studio", "Dashboards"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          <span className="glow-node glow-node-inline"></span>
          SERVICIOS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Lo que <em className="poetic">construimos</em> para tu empresa.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Páginas web, automatización e inteligencia artificial, diseñadas a la medida de cada organización.</motion.p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((svc) => (
          <motion.div
            key={svc.num}
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="service-card"
          >
            <div className="service-num">{svc.num}</div>
            <h3 className="service-title">{svc.title}</h3>
            <p className="service-desc">{svc.desc}</p>
            <div className="service-tags">
              {svc.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
