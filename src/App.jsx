import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve Initial Load Time (LCP)
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const ParaQuien = lazy(() => import('./components/ParaQuien'));
const Process = lazy(() => import('./components/Process'));
const Herramientas = lazy(() => import('./components/Herramientas'));
const Origin = lazy(() => import('./components/Origin'));
const CTA = lazy(() => import('./components/CTA'));

// Panel de administrador (ruta no enlazada en el sitio)
const Admin = lazy(() => import('./pages/Admin'));

// Página principal (Home)
const HomePage = () => (
  <Layout>
    <Hero />
    <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
      <Stats />
      <Services />
      <ParaQuien />
      <Process />
      <Herramientas />
      <Origin />
      <CTA />
    </Suspense>
  </Layout>
);

function App() { return (
      <BrowserRouter>
        <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--black-deep)' }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jose" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
