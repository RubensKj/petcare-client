import React from 'react';

import './styles.css';

export default function AreaOrder({ staticText, info, borderBottom }) {
  return (
    <div className="area-order" style={borderBottom}>
      <div className="content-order-area">
        <span className="static-text">{staticText}</span>
        <span className="info-text">{info}</span>
      </div>
    </div>
  );
}
