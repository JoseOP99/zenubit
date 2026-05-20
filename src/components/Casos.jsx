import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Casos = () => {
  const caseStudies = [
    {
      num: "CASO 01 / CRM NO-CODE",
      title: "CRM para Gestión de Leads, Tareas y Compras",
      desc: "Desarrollamos una solución móvil y web en AppSheet para que el equipo comercial registre leads, gestione tareas de seguimiento y controle compras y gastos en campo, con sincronización automática y soporte offline.",
      metrics: [
        { value: "3 sem", label: "Tiempo de go-live" },
        { value: "847h", label: "Horas recuperadas al mes" }
      ],
      tags: ["AppSheet", "No-Code", "CRM"]
    },
    {
      num: "CASO 02 / INTEGRACIÓN API",
      title: "Conexión de Lovable con Power Platform",
      desc: "Conectamos la interfaz web interactiva creada en Lovable con el motor empresarial de Microsoft. Usamos Webhooks y Power Automate para transferir datos y disparar flujos internos en tiempo real de forma segura.",
      metrics: [
        { value: "100%", label: "Sincronización en vivo" },
        { value: "< 2s", label: "Latencia de webhook" }
      ],
      tags: ["Power Automate", "Lovable", "Webhooks"]
    },
    {
      num: "CASO 03 / UI/UX PREMIUM",
      title: "Power Apps Personalizadas con HTML & CSS",
      desc: "Superamos los límites visuales nativos de Power Apps inyectando contenedores HTML/CSS a la medida. Creamos botones con micro-interacciones, sombras fluidas, gráficos SVG embebidos y tableros interactivos de alta gama.",
      metrics: [
        { value: "98%", label: "Adopción de usuarios" },
        { value: "0px", label: "Desviación Pixel-Perfect" }
      ],
      tags: ["Power Apps", "HTML/CSS Custom", "Diseño Premium"]
    },
    {
      num: "CASO 04 / EMAILS DINÁMICOS",
      title: "Automatización de Reportes y Correos HTML",
      desc: "Diseñamos un flujo en Power Automate que consolida las métricas del día y envía reportes automatizados en correos electrónicos con plantillas HTML responsivas elegantes, tablas de datos coloridas y branding premium.",
      metrics: [
        { value: "100%", label: "Automatizado" },
        { value: "0 min", label: "Esfuerzo de reporte" }
      ],
      tags: ["Power Automate", "HTML Emails", "Plantillas"]
    },
    {
      num: "CASO 05 / APPSHEET AVANZADO",
      title: "AppSheet con Interfaces y Vistas Premium",
      desc: "Llevamos AppSheet al siguiente nivel visual y funcional. Diseñamos tableros multitabla personalizados, vistas de mapas interactivos para ruteo de campo y formatos condicionales que hacen la app intuitiva y atractiva.",
      metrics: [
        { value: "4.8 ★", label: "Calificación interna" },
        { value: "100%", label: "Uso activo en campo" }
      ],
      tags: ["AppSheet UX", "Dashboard", "Vistas Kanban"]
    },
    {
      num: "CASO 06 / ANALÍTICA EN ACCIÓN",
      title: "Tableros de Power BI integrados en Power Apps",
      desc: "Creamos un centro de control operativo que incrusta paneles analíticos en tiempo real de Power BI directamente en Power Apps, permitiendo a gerencia auditar datos y tomar decisiones correctivas al instante.",
      metrics: [
        { value: "15 min", label: "Tiempo diario de análisis" },
        { value: "100%", label: "Auditoría centralizada" }
      ],
      tags: ["Power BI", "Power Apps", "Analítica"]
    }
  ];

  return (
    <section id="casos" className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          <span className="glow-node glow-node-inline"></span>
          CASOS DE ÉXITO &middot; NUESTRAS HISTORIAS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Soluciones que <em className="poetic">transforman</em> la operación.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Conoce algunos de los proyectos donde unimos diseño premium con automatización robusta para erradicar el trabajo manual.</motion.p>
      </motion.div>

      <motion.div 
        className="casos-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {caseStudies.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="service-card"
          >
            <div>
              <div className="service-num">
                <span className="glow-node"></span>
                {item.num}
              </div>
              <h3 className="service-title" style={{ fontSize: '24px', marginBottom: '16px', lineHeight: '1.25' }}>{item.title}</h3>
              <p className="service-desc" style={{ marginBottom: '32px' }}>{item.desc}</p>
            </div>
            
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--charcoal)', paddingTop: '20px', marginBottom: '24px' }}>
                {item.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <div style={{ font: '500 32px/1 var(--font-display)', color: 'var(--cyan)' }}>
                      {metric.value}
                    </div>
                    <div style={{ font: '400 9px/1.4 var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: '4px' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="service-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Casos;
