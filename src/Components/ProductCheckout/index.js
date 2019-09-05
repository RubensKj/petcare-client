import React from 'react';

import './styles.css';

export default function ProductCheckout({ itemCheckout, handleDelete }) {
  return (
    <div className="product-checkout">
      <div className="product-checkout-information">
        <div className="name-and-quantity">
          <span>1x - </span>
          <span className="product-name">{itemCheckout.name}</span>
        </div>
        <div className="price-check">
          <span className="price-product-checkout">R$ {itemCheckout.price}</span>
        </div>
      </div>
      <button className="btn-remove-product-checkout" onClick={handleDelete}>Remover</button>
    </div>
  );
}
