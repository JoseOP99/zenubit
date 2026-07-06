import React from 'react';

const Stats = () => {
  return (
    <div className="stats-strip">
      <div className="stat">
        <div className="num"><em>100</em><span className="unit">%</span></div>
        <div className="lbl">Diseños a Medida</div>
      </div>
      <div className="stat">
        <div className="num"><em>1-a-1</em></div>
        <div className="lbl">Acompañamiento Directo</div>
      </div>
      <div className="stat">
        <div className="num"><em>&lt; 3</em><span className="unit">sem</span></div>
        <div className="lbl">Entrega Ágil</div>
      </div>
    </div>
  );
};

export default Stats;
