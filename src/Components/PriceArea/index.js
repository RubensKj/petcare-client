import React from 'react';

import './styles.css';

export default function PriceArea({ staticText, info }) {
  return (
    <div className="area-price-order">
      <div className="content-order-price-area">
        <span className="static-text">{staticText}</span>
        <span className="info-text">{info}</span>
      </div>
    </div>
  );
}
