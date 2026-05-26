import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const services = [
  {
    num: "01",
    title: "Power Platform",
    desc: "Ecosistemas completos con Power Automate, Power Apps, Power BI y Dataverse.",
    tags: ["Power Automate", "Power BI", "Dataverse"]
  },
  {
    num: "02",
    title: "AppSheet",
    desc: "Apps móviles y web no-code con diseño personalizado. Sincronización con Excel, Sheets o bases de datos.",
    tags: ["Google Sheets", "No-Code", "Offline-First"]
  },
  {
    num: "03",
    title: "Web & AI",
    desc: "Desarrollo web a la medida con integraciones de IA. Portales, dashboards e interfaces internas.",
    tags: ["React", "OpenAI", "Vercel"]
  },
  {
    num: "04",
    title: "RPA & Procesos",
    desc: "Eliminamos tareas repetitivas con flujos automatizados, bots de facturación y reportes diarios.",
    tags: ["UiPath", "Bots", "APIs"]
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
          SERVICIOS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Lo que <em className="poetic">construimos</em> para tu empresa.</motion.h2>
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
