import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Stack = () => {
  const categories = [
    {
      title: "Microsoft Ecosystem",
      tools: ["Power Automate", "Power Apps", "Power BI", "Dataverse", "Copilot Studio", "SharePoint"]
    },
    {
      title: "No-Code & Databases",
      tools: ["AppSheet", "Google Sheets", "Excel VBA", "PostgreSQL", "SQL Server"]
    },
    {
      title: "AI & Custom Web Dev",
      tools: ["React / Vite", "Node.js", "Python", "OpenAI API", "Anthropic API", "Vercel"]
    },
    {
      title: "Process Automation (RPA)",
      tools: ["UiPath", "Bots de Facturación", "Scraping de Datos", "APIs de Pago"]
    }
  ];

  return (
    <section id="stack" className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="glow-node" style={{ position: 'relative', display: 'inline-block', top: 'auto', left: 'auto', transform: 'none' }}></span>
          HERRAMIENTAS &middot; NUESTRO STACK
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">El hilo conductor de nuestra <em className="poetic">tecnología</em>.</motion.h2>
        <motion.p variants={fadeInUp} className="sec-sub">Dominamos las herramientas más eficientes del mercado para construir ecosistemas integrados y seguros.</motion.p>
      </motion.div>

      <motion.div 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="stack-card"
          >
            <h4 className="stack-title">
              {cat.title}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.tools.map((tool, tIdx) => (
                <span key={tIdx} className="tag active" style={{ fontSize: '9px', padding: '4px 10px' }}>
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stack;
