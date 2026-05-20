import React from 'react';

const Stats = () => {
  return (
    <div className="stats-strip">
      <div className="stat-brand">.v.2026.05</div>
      <div className="stat">
        <div className="num"><em>1,200</em><span className="unit">+</span></div>
        <div className="lbl">Procesos Automatizados</div>
      </div>
      <div className="stat">
        <div className="num"><em>99.8</em><span className="unit">%</span></div>
        <div className="lbl">Uptime Garantizado</div>
      </div>
      <div className="stat">
        <div className="num"><em>30</em><span className="unit">+</span></div>
        <div className="lbl">Empresas Activas</div>
      </div>
      <div className="stat-brand">zenubit.com</div>
    </div>
  );
};

export default Stats;
