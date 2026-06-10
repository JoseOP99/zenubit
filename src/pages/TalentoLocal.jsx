import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormSubmit } from '../hooks/useFormSubmit';
import PhoneInput from '../components/PhoneInput';
import Layout from '../components/layout/Layout';

/* ─────────────────────────────────────────
   Constantes
───────────────────────────────────────── */
const NIVELES_ESTUDIO = [
  'Bachiller (Estudiante)',
  'Bachiller (Graduado)',
  'Técnico / Tecnólogo',
  'Universitario (En curso)',
  'Universitario (Graduado)',
  'Autodidacta',
  'Otro',
];

const ESTADO_INICIAL = {
  nombre: '',
  correo: '',
  numero: '',
  estudios: '',
  motivacion: '',
};

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────
   Sub-componentes memoizados
───────────────────────────────────────── */
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RoadmapItem = memo(({ num, titulo, descripcion }) => (
  <li className="talento-roadmap-item">
    <span className="roadmap-num" aria-hidden="true">{num}</span>
    <div>
      <strong>{titulo}</strong>
      <p>{descripcion}</p>
    </div>
  </li>
));
RoadmapItem.displayName = 'RoadmapItem';

const FormSuccess = memo(({ onReset }) => (
  <motion.div
    className="form-success"
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    role="status"
    aria-live="polite"
  >
    <div className="form-success-icon" aria-hidden="true"><IconCheck /></div>
    <h3 className="form-success-title">¡Registro recibido!</h3>
    <p className="form-success-desc">
      Gracias por tu interés. Quedaste en nuestra lista de candidatos para Talento Local.
      Te contactaremos cuando el proceso avance.
    </p>
    <button className="btn btn-outline" onClick={onReset}>
      Registrar otra persona
    </button>
  </motion.div>
));
FormSuccess.displayName = 'TalentoFormSuccess';

/* ─────────────────────────────────────────
   Página principal
───────────────────────────────────────── */
const TalentoLocal = () => {
  const { form, estado, error, handleChange, handleSubmit, resetForm } = useFormSubmit(
    'talento_local',
    ESTADO_INICIAL
  );

  return (
    <Layout>
      {/* SEO / Meta está manejado en index.html; el H1 semántico está aquí */}

      {/* ── HERO ── */}
      <section className="talento-hero container" aria-labelledby="tl-hero-title">
        <motion.div
          className="talento-hero-inner"
          variants={STAGGER}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={FADE_UP} className="eyebrow" aria-hidden="true">
            Convocatoria Abierta
          </motion.p>
          <motion.h1 id="tl-hero-title" variants={FADE_UP} className="sec-title talento-title">
            Talento <em>Local</em>
          </motion.h1>
          <motion.p variants={FADE_UP} className="hero-desc">
            Buscamos personas de nuestra región con ganas de aprender y crecer en el mundo de la
            automatización, inteligencia artificial y desarrollo de software. No importa tu nivel actual —
            lo que importa es tu disposición.
          </motion.p>
          <motion.a variants={FADE_UP} href="#registro" className="btn btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>
            Registrarme ahora &darr;
          </motion.a>
        </motion.div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="container talento-info-section" aria-label="Sobre el programa">
        <div className="talento-info-grid">

          <motion.div
            className="talento-info-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sec-eyebrow">
              <span className="eyebrow-line" aria-hidden="true"></span>
              El programa
            </span>
            <h2 className="talento-card-title">¿De qué se trata?</h2>
            <p className="t-body" style={{ color: 'var(--cream-dim)', lineHeight: '1.75' }}>
              Zenubit nació en Tuchin, Córdoba, con una misión clara: llevar la tecnología a nuestra gente.
              Este programa busca identificar y preparar talento local en herramientas como{' '}
              <strong style={{ color: 'var(--tan-light)' }}>
                Power Platform, AppSheet, automatización con IA y desarrollo web
              </strong>.
            </p>
            <p className="t-body" style={{ color: 'var(--cream-dim)', lineHeight: '1.75', marginTop: '16px' }}>
              Es una apuesta por el futuro de nuestra región — construida desde adentro.
            </p>
          </motion.div>

          <motion.div
            className="talento-info-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="sec-eyebrow">
              <span className="eyebrow-line" aria-hidden="true"></span>
              Lo que viene
            </span>
            <h2 className="talento-card-title">Proceso de selección</h2>
            <ol className="talento-roadmap" aria-label="Pasos del proceso">
              <RoadmapItem
                num="01"
                titulo="Registro de interés"
                descripcion="Llena el formulario con tu información y cuéntanos por qué quieres participar."
              />
              <RoadmapItem
                num="02"
                titulo="Evaluación"
                descripcion="Próximamente se habilitarán pruebas de aptitud para medir tu potencial."
              />
              <RoadmapItem
                num="03"
                titulo="Capacitación"
                descripcion="Los seleccionados recibirán formación práctica en las tecnologías que usamos."
              />
            </ol>
          </motion.div>

        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section className="talento-form-section glow-bg" id="registro" aria-labelledby="tl-form-title">
        <div className="container">
          <motion.div
            className="talento-form-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sec-eyebrow">
              <span className="eyebrow-line" aria-hidden="true"></span>
              Registro
            </span>
            <h2 id="tl-form-title" className="sec-title">
              Quiero <em>participar</em>
            </h2>
            <p className="sec-sub">
              Déjanos tus datos y te contactamos cuando el proceso de selección comience.
              Tu información está segura con nosotros.
            </p>
          </motion.div>

          <motion.div
            className="talento-form-wrapper"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {estado === 'success' ? (
                <FormSuccess key="success" onReset={resetForm} />
              ) : (
                <motion.form
                  key="form"
                  className="talento-form"
                  onSubmit={handleSubmit}
                  noValidate
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Formulario de registro Talento Local"
                >
                  <div className="cta-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="tl-nombre">Nombre completo</label>
                      <input
                        id="tl-nombre"
                        type="text"
                        name="nombre"
                        className="form-input"
                        placeholder="Tu nombre y apellido"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="tl-correo">Correo electrónico</label>
                      <input
                        id="tl-correo"
                        type="email"
                        name="correo"
                        className="form-input"
                        placeholder="tucorreo@ejemplo.com"
                        value={form.correo}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="cta-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="tl-numero">WhatsApp / Teléfono</label>
                      <PhoneInput
                        id="tl-numero"
                        name="numero"
                        value={form.numero}
                        onChange={handleChange}
                        required
                        disabled={estado === 'loading'}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="tl-estudios">Nivel de estudios</label>
                      <select
                        id="tl-estudios"
                        name="estudios"
                        className="form-input form-select"
                        value={form.estudios}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona tu nivel</option>
                        {NIVELES_ESTUDIO.map((nivel) => (
                          <option key={nivel} value={nivel}>{nivel}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="tl-motivacion">
                      ¿Por qué quieres participar?
                    </label>
                    <textarea
                      id="tl-motivacion"
                      name="motivacion"
                      className="form-input form-textarea"
                      placeholder="Cuéntanos qué te motiva, qué quieres aprender, o cualquier cosa relevante sobre ti..."
                      value={form.motivacion}
                      onChange={handleChange}
                      required
                      rows={4}
                    />
                  </div>

                  {error && (
                    <p className="form-error" role="alert">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={estado === 'loading'}
                    aria-busy={estado === 'loading'}
                  >
                    {estado === 'loading' ? (
                      <><span className="btn-spinner" aria-hidden="true"></span>Enviando...</>
                    ) : (
                      <>Enviar registro &rarr;</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentoLocal;
