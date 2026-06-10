import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve Initial Load Time (LCP)
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Herramientas = lazy(() => import('./components/Herramientas'));
const Origin = lazy(() => import('./components/Origin'));
const CTA = lazy(() => import('./components/CTA'));

// Lazy load pages
const TalentoLocal = lazy(() => import('./pages/TalentoLocal'));

// Página principal (Home)
const HomePage = () => (
  <Layout>
    <Hero />
    <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
      <Stats />
      <Services />
      <Process />
      <Herramientas />
      <Origin />
      <CTA />
    </Suspense>
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--black-deep)' }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talento-local" element={<TalentoLocal />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
