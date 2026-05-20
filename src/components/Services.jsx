import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Services = () => {
  return (
    <section id="servicios" className="container bg-grid">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          <span className="glow-node glow-node-inline"></span>
          SERVICIOS &middot; 04 ÁREAS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Lo que <em className="poetic">construimos</em> para tu empresa.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Automatización inteligente, integración de plataformas y aplicaciones avanzadas con diseños personalizados para tu negocio.</motion.p>
      </motion.div>
      
      <motion.div 
        className="services-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num">
            <span className="glow-node"></span>
            01 / PLATAFORMA MÁS POTENTE
          </div>
          <h3 className="service-title">Power Platform</h3>
          <p className="service-desc">Creamos ecosistemas completos usando Power Automate, Power Apps, Power BI y Dataverse. Conectamos los datos de tu negocio en interfaces modernas.</p>
          <div className="service-tags">
            <span className="tag">Power Automate</span>
            <span className="tag">Power BI</span>
            <span className="tag">Dataverse</span>
          </div>
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num">
            <span className="glow-node"></span>
            02 / APPS A LA MEDIDA
          </div>
          <h3 className="service-title">AppSheet</h3>
          <p className="service-desc">Desarrollo ágil de aplicaciones móviles y web con diseños personalizados y adaptativos. Sincronización directa con Excel, Sheets o bases de datos.</p>
          <div className="service-tags">
            <span className="tag">Google Sheets</span>
            <span className="tag">Diseños Únicos</span>
            <span className="tag">No-Code App</span>
          </div>
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num">
            <span className="glow-node"></span>
            03 / DESARROLLO E IA
          </div>
          <h3 className="service-title">Vibecode, Web &amp; AI</h3>
          <p className="service-desc">Desarrollo web a la medida con diseño personalizado exclusivo. Desde portales corporativos atractivos hasta integraciones profundas con modelos de IA.</p>
          <div className="service-tags">
            <span className="tag">Web Dev</span>
            <span className="tag">Diseño a Medida</span>
            <span className="tag">Modelos de IA</span>
          </div>
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num">
            <span className="glow-node"></span>
            04 / EFICIENCIA TOTAL
          </div>
          <h3 className="service-title">RPA &amp; Procesos</h3>
          <p className="service-desc">Eliminamos tareas repetitivas mediante flujos automatizados estables. Integración de UiPath, conciliación automática de pagos y reportes diarios.</p>
          <div className="service-tags">
            <span className="tag">UiPath</span>
            <span className="tag">Bots</span>
            <span className="tag">Eficiencia</span>
          </div>
          <a href="https://wa.link/6fdprv" target="_blank" rel="noopener noreferrer" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
