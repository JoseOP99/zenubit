import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormSubmit } from '../hooks/useFormSubmit';
import PhoneInput from './PhoneInput';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';

const ESTADO_INICIAL = { nombre: '', correo: '', numero: '', interes: '' };

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.473 1.332 4.978L2 22l5.176-1.356c1.442.786 3.07 1.2 4.824 1.2 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.208 14.154c-.255.72-1.464 1.31-2.022 1.39-.48.07-1.104.11-3.23-.77-2.72-1.12-4.46-3.89-4.59-4.07-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.92.91-2.18.24-.26.52-.33.7-.33.17 0 .35 0 .5.01.16 0 .37-.06.57.43.2.5.7 1.71.76 1.83.06.12.1.26.02.42-.08.17-.18.28-.3.42-.12.14-.26.31-.37.42-.12.12-.25.26-.1.52.14.25.64 1.07 1.38 1.73.95.85 1.75 1.11 2 1.22.25.11.4.1.55-.07.15-.17.65-.76.82-.99.17-.24.34-.2.57-.11.24.09 1.5.71 1.76.84.26.13.43.2.49.31.06.11.06.64-.19 1.36z" />
  </svg>
);

const FormSuccess = memo(({ onReset }) => (
  <motion.div
    className="cta-form-success form-success"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    role="status"
    aria-live="polite"
  >
    <div className="form-success-icon" aria-hidden="true"><IconCheck /></div>
    <h3 className="form-success-title">¡Mensaje recibido!</h3>
    <p className="form-success-desc">
      Gracias por contactarnos. Te responderemos pronto para coordinar nuestra conversación.
    </p>
    <button className="btn btn-outline" onClick={onReset}>
      Enviar otro mensaje
    </button>
  </motion.div>
));
FormSuccess.displayName = 'CTAFormSuccess';

const CTA = () => {
  const { form, estado, error, handleChange, handleSubmit, resetForm } = useFormSubmit(
    'leads_automatizacion',
    ESTADO_INICIAL
  );

  return (
    <section className="cta-section glow-bg" id="contacto">
      <div className="container">
        <picture>
          <source srcSet={logoZenubitWebP} type="image/webp" />
          <img src={logoZenubit} alt="Zenubit" className="cta-logo" width="80" height="80" />
        </picture>
        <h2 className="cta-title">¿Listo para <em className="poetic">automatizar</em>?</h2>
        <p className="cta-sub">
          Conversemos 30 minutos. Te mostramos qué procesos se pueden automatizar y cuánto te ahorrarías — sin costo.
        </p>

        <AnimatePresence mode="wait">
          {estado === 'success' ? (
            <FormSuccess key="success" onReset={resetForm} />
          ) : (
            <motion.form
              key="form"
              className="cta-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Formulario de contacto"
            >
              <div className="cta-form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-nombre">Nombre completo</label>
                  <input
                    id="cta-nombre"
                    type="text"
                    name="nombre"
                    className="form-input"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-correo">Correo electrónico</label>
                  <input
                    id="cta-correo"
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
                  <label className="form-label" htmlFor="cta-numero">WhatsApp / Teléfono</label>
                  <PhoneInput
                    id="cta-numero"
                    name="numero"
                    value={form.numero}
                    onChange={handleChange}
                    required
                    disabled={estado === 'loading'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cta-interes">
                    ¿Qué proceso te gustaría automatizar?
                    <span className="form-label-optional"> (Opcional)</span>
                  </label>
                  <input
                    id="cta-interes"
                    type="text"
                    name="interes"
                    className="form-input"
                    placeholder="Ej: facturación, reportes, seguimiento..."
                    value={form.interes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error && (
                <p className="form-error" role="alert">{error}</p>
              )}

              <div className="cta-form-actions">
                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={estado === 'loading'}
                  aria-busy={estado === 'loading'}
                >
                  {estado === 'loading' ? (
                    <><span className="btn-spinner" aria-hidden="true"></span>Enviando...</>
                  ) : (
                    <>Conversemos &rarr;</>
                  )}
                </button>
                <a
                  href="https://wa.link/6fdprv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label="Contactar por WhatsApp directamente"
                >
                  <IconWhatsApp />
                  WhatsApp directo
                </a>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default memo(CTA);
