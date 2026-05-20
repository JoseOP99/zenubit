import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="container bg-grid" style={{ paddingTop: '120px' }}>
      <div className="sec-eyebrow">SERVICIOS &middot; 04 ÁREAS</div>
      <h2 className="sec-title">Lo que <em className="poetic">construimos</em> para tu empresa.</h2>
      <p className="sec-sub">Automatización inteligente, integración sin código y desarrollo avanzado para llevar tus operaciones al siguiente nivel.</p>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-num">01 / PLATAFORMA MÁS POTENTE</div>
          <h3 className="service-title">Power Platform</h3>
          <p className="service-desc">Creamos ecosistemas completos usando Power Automate, Power Apps, Power BI, y Dataverse para conectar todos los hilos de tu negocio.</p>
          <div className="service-tags">
            <span className="tag">Power Automate</span>
            <span className="tag">Power BI</span>
            <span className="tag">Dataverse</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </div>

        <div className="service-card">
          <div className="service-num">02 / APPS A LA MEDIDA</div>
          <h3 className="service-title">AppSheet</h3>
          <p className="service-desc">Desarrollo veloz de aplicaciones móviles y web sincronizadas directamente con tus bases de datos, Google Sheets o Excel. Soluciones no-code ágiles.</p>
          <div className="service-tags">
            <span className="tag">Google Sheets</span>
            <span className="tag">No-Code</span>
            <span className="tag">Móvil</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </div>

        <div className="service-card">
          <div className="service-num">03 / DESARROLLO E IA</div>
          <h3 className="service-title">Vibecode &amp; AI</h3>
          <p className="service-desc">Desarrollo web a la medida integrado con IA. Desde landings atractivas hasta dashboards interactivos y herramientas internas avanzadas.</p>
          <div className="service-tags">
            <span className="tag">Web Dev</span>
            <span className="tag">LLM / AI</span>
            <span className="tag">Dashboards</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </div>

        <div className="service-card">
          <div className="service-num">04 / EFICIENCIA TOTAL</div>
          <h3 className="service-title">RPA &amp; Procesos</h3>
          <p className="service-desc">Elimina el trabajo repetitivo con automatización de UiPath, bots de facturación, conciliación de pagos y correos automatizados.</p>
          <div className="service-tags">
            <span className="tag">UiPath</span>
            <span className="tag">Bots</span>
            <span className="tag">Integraciones</span>
          </div>
          <a href="#contacto" className="service-link">Cotizar este servicio &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
