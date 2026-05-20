import React, { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve Initial Load Time (LCP)
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Casos = lazy(() => import('./components/Casos'));
const Stack = lazy(() => import('./components/Stack'));
const Origin = lazy(() => import('./components/Origin'));
const CTA = lazy(() => import('./components/CTA'));

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
        <Stats />
        <Services />
        <Process />
        <Casos />
        <Stack />
        <Origin />
        <CTA />
      </Suspense>
    </Layout>
  );
}

export default App;
