import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Process = () => {
  return (
    <section id="proceso" className="container" style={{ backgroundColor: 'var(--black-deep)' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          PROCESO
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Nuestro <em className="poetic">tejido digital</em>.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Paciencia, precisión y un patrón que se sostiene a través del tiempo.</motion.p>
      </motion.div>

      <motion.div
        className="process-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeInUp} className="process-step">
          <div className="process-num">01</div>
          <h3 className="process-title">Diagnóstico</h3>
          <p className="process-desc">Mapeamos tu proceso, identificamos cuellos de botella y calculamos el ROI esperado.</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="process-step">
          <div className="process-num">02</div>
          <h3 className="process-title">Diseño</h3>
          <p className="process-desc">Arquitectura, validación de flujo y KPIs antes de escribir una línea de código.</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="process-step">
          <div className="process-num">03</div>
          <h3 className="process-title">Construcción</h3>
          <p className="process-desc">Implementación ágil con entregas semanales y comunicación clara.</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="process-step">
          <div className="process-num">04</div>
          <h3 className="process-title">Operación</h3>
          <p className="process-desc">Despliegue, capacitación y soporte continuo.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Process;
