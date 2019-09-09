import React from 'react';

import './styles.css';

export default function OrderItemCard({ item }) {
  return (
    <div className="order-item-card">
      <div className="item-header">
        <h3>{item.name}</h3>
      </div>
      <div className="item-content">
        <span>{item.description}</span>
        <div className="price-area-of-item">
          <span className="price-sign">R$</span>
          <span className="price-quantity">{item.price}</span>
        </div>
      </div>
    </div>
  );
}
