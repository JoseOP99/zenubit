import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoZenubit from '../assets/logoZenubit.png';
import logoZenubitWebP from '../assets/logoZenubit.webp';

const Loader = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="loader-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        aria-label="Cargando Zenubit"
      >
        <div className="loader-visual">
          <div className="loader-ring"></div>
          <div className="loader-ring loader-ring-outer"></div>
          <div className="loader-logo-wrap">
            <motion.picture
              animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'block' }}
            >
              <source srcSet={logoZenubitWebP} type="image/webp" />
              <img src={logoZenubit} alt="Zenubit" className="loader-logo" />
            </motion.picture>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
