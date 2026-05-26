import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

const categories = [
  {
    title: "Microsoft",
    tools: ["Power Automate", "Power Apps", "Power BI", "Dataverse", "Copilot Studio"]
  },
  {
    title: "No-Code & Data",
    tools: ["AppSheet", "Google Sheets", "Excel", "SQL Server", "PostgreSQL"]
  },
  {
    title: "Web & AI",
    tools: ["React", "Next.js", "Python", "OpenAI API", "Vercel"]
  },
  {
    title: "RPA & Integración",
    tools: ["UiPath", "Webhooks", "REST APIs", "Power Automate Desktop"]
  }
];

const Herramientas = () => {
  return (
    <section id="herramientas" className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="sec-eyebrow">
          HERRAMIENTAS
        </motion.div>
        <motion.h2 variants={fadeInUp} className="sec-title">Nuestro <em className="poetic">stack</em> tecnológico.</motion.h2>
      </motion.div>

      <motion.div
        className="herramientas-grid"
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
            <h4 className="stack-title">{cat.title}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.tools.map((tool, tIdx) => (
                <span key={tIdx} className="tag active" style={{ fontSize: '9px', padding: '5px 12px' }}>
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

export default Herramientas;
