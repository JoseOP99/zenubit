import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Herramientas = () => {
  const tools = [
    {
      category: "POWER PLATFORM",
      icon: "⚙️",
      title: "Microsoft Power Suite",
      desc: "Automatización empresarial con Power Automate, integración de datos con Power BI, aplicaciones personalizadas con Power Apps y gestión de datos con Dataverse.",
      tools: ["Power Automate", "Power Apps", "Power BI", "Dataverse", "Copilot Studio"]
    },
    {
      category: "MOBILE & APPS",
      icon: "📱",
      title: "AppSheet No-Code",
      desc: "Desarrollo ágil de aplicaciones móviles y web. Sincronización directa con Google Sheets, Excel, SQL Server y bases de datos empresariales. Interfaces adaptativas y offline-first.",
      tools: ["AppSheet", "Google Sheets", "Excel", "SQL Server", "Google Cloud"]
    },
    {
      category: "DESARROLLO WEB",
      icon: "💻",
      title: "Vibecode & Web Development",
      desc: "Desarrollo web personalizado con React, Next.js y frameworks modernos. Portales corporativos, dashboards interactivos, e integración profunda con modelos de IA y APIs externas.",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "AUTOMATIZACIÓN ROBÓTICA",
      icon: "🤖",
      title: "RPA & Process Automation",
      desc: "Eliminación de tareas manuales repetitivas. UiPath para RPA avanzado, Power Automate Desktop para automatización local, flujos de emails, conciliaciones y reportes automáticos.",
      tools: ["UiPath", "Power Automate Desktop", "Webhooks", "API Integration", "Cloud Flows"]
    },
    {
      category: "INTELIGENCIA ARTIFICIAL",
      icon: "🧠",
      title: "AI & Machine Learning",
      desc: "Integración de modelos de IA como OpenAI GPT, Azure AI Services, y Copilot. Desde chatbots inteligentes hasta análisis predictivo y procesamiento de lenguaje natural.",
      tools: ["OpenAI GPT", "Azure AI", "Copilot", "Document Intelligence", "Cognitive Services"]
    },
    {
      category: "INTEGRACIÓN & DATOS",
      icon: "🔗",
      title: "APIs, Webhooks & Integraciones",
      desc: "Conexión seamless entre tus sistemas existentes. REST APIs, GraphQL, webhooks bidireccionales, y middleware personalizado para flujo de datos sin interrupciones.",
      tools: ["REST APIs", "GraphQL", "Webhooks", "Middleware", "Data Sync"]
    }
  ];

  return (
    <section id="herramientas" className="container bg-grid">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          <span className="glow-node glow-node-inline"></span>
          STACK TECNOLÓGICO · LO QUE USAMOS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Herramientas que <em className="poetic">transforman</em> tu negocio.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Dominamos las plataformas más poderosas del mercado. Cada herramienta elegida con precisión para resolver tu problema específico.</motion.p>
      </motion.div>

      <motion.div
        className="herramientas-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {tools.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="service-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>{item.icon}</span>
              <div className="service-num" style={{ margin: 0 }}>
                {item.category}
              </div>
            </div>

            <h3 className="service-title" style={{ fontSize: '24px', marginBottom: '12px', lineHeight: '1.25' }}>{item.title}</h3>
            <p className="service-desc" style={{ marginBottom: '24px' }}>{item.desc}</p>

            <div className="service-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {item.tools.map((tool, tIdx) => (
                <span key={tIdx} className="tag">{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Herramientas;
