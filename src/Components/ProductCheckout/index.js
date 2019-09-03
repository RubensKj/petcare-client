import React from 'react';

import './styles.css';

export default function ProductCheckout({ productCheckout }) {
  return (
    <div className="product-checkout">
      <div className="product-checkout-information">
        <div className="name-and-quantity">
          <span>1x - </span>
          <span className="product-name">Nome do produto Nome do produto Nome do produtoNome do produtoNome do produtoNome do produtoNome do produtoNome do produtoNome do produto</span>
        </div>
        <div className="price-check">
          <span className="price-product-checkout">R$ 20000.00</span>
        </div>
      </div>
      <button className="btn-remove-product-checkout">Remover</button>
    </div>
  );
}
