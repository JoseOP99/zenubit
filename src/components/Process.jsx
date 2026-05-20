import React from 'react';

const Process = () => {
  return (
    <section id="proceso" className="container" style={{ backgroundColor: 'var(--black-deep)', padding: '120px 64px' }}>
      <div className="sec-eyebrow">METODOLOGÍA</div>
      <h2 className="sec-title">Nuestro proceso de <em className="poetic">tejido digital</em>.</h2>
      <p className="sec-sub">Construimos código con la misma disciplina con la que se teje un sombrero fino: paciencia, precisión y un patrón que se sostiene a través del tiempo.</p>

      <div className="process-grid">
        <div className="process-step">
          <div className="process-num">01 / MAPEO</div>
          <h3 className="process-title">Diagnóstico</h3>
          <p className="process-desc">Mapeamos tu proceso, identificamos cuellos de botella y calculamos el ROI esperado. Buscamos entender la raíz del problema.</p>
        </div>
        <div className="process-step">
          <div className="process-num">02 / ARQUITECTURA</div>
          <h3 className="process-title">Diseño</h3>
          <p className="process-desc">Diagramamos la arquitectura, validamos el flujo y definimos KPIs antes de escribir una sola línea de código.</p>
        </div>
        <div className="process-step">
          <div className="process-num">03 / DESARROLLO</div>
          <h3 className="process-title">Construcción</h3>
          <p className="process-desc">Implementación ágil con entregas semanales. Mantenemos comunicación clara para asegurar que la solución encaje perfectamente.</p>
        </div>
        <div className="process-step">
          <div className="process-num">04 / SOPORTE</div>
          <h3 className="process-title">Operación</h3>
          <p className="process-desc">Despliegue, capacitación del equipo, monitoreo constante y soporte continuo para que la automatización fluya sin interrupciones.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
