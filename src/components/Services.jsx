import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Services = () => {
  return (
    <section id="servicios" className="container bg-grid" style={{ paddingTop: '120px' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="glow-node" style={{ position: 'relative', display: 'inline-block', top: 'auto', left: 'auto', transform: 'none' }}></span>
          SERVICIOS &middot; 04 ÁREAS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Lo que <em className="poetic">construimos</em> para tu empresa.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Automatización inteligente, integración sin código y desarrollo avanzado para llevar tus operaciones al siguiente nivel.</motion.p>
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
          <div className="service-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-node" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', width: '6px', height: '6px' }}></span>
            01 / PLATAFORMA MÁS POTENTE
          </div>
          <h3 className="service-title">Power Platform</h3>
          <p className="service-desc">Creamos ecosistemas completos usando Power Automate, Power Apps, Power BI, y Dataverse para conectar todos los hilos de tu negocio.</p>
          <div className="service-tags">
            <span className="tag">Power Automate</span>
            <span className="tag">Power BI</span>
            <span className="tag">Dataverse</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-node" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', width: '6px', height: '6px' }}></span>
            02 / APPS A LA MEDIDA
          </div>
          <h3 className="service-title">AppSheet</h3>
          <p className="service-desc">Desarrollo veloz de aplicaciones móviles y web sincronizadas directamente con tus bases de datos, Google Sheets o Excel. Soluciones no-code ágiles.</p>
          <div className="service-tags">
            <span className="tag">Google Sheets</span>
            <span className="tag">No-Code</span>
            <span className="tag">Móvil</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-node" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', width: '6px', height: '6px' }}></span>
            03 / DESARROLLO E IA
          </div>
          <h3 className="service-title">Vibecode &amp; AI</h3>
          <p className="service-desc">Desarrollo web a la medida integrado con IA. Desde landings atractivas hasta dashboards interactivos y herramientas internas avanzadas.</p>
          <div className="service-tags">
            <span className="tag">Web Dev</span>
            <span className="tag">LLM / AI</span>
            <span className="tag">Dashboards</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="service-card"
        >
          <div className="service-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-node" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', width: '6px', height: '6px' }}></span>
            04 / EFICIENCIA TOTAL
          </div>
          <h3 className="service-title">RPA &amp; Procesos</h3>
          <p className="service-desc">Elimina el trabajo repetitivo con automatización de UiPath, bots de facturación, conciliación de pagos y correos automatizados.</p>
          <div className="service-tags">
            <span className="tag">UiPath</span>
            <span className="tag">Bots</span>
            <span className="tag">Integraciones</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
