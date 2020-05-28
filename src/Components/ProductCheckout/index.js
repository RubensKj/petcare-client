import React from 'react';

import './styles.css';

export default function ProductCheckout({ itemCheckout, handleDelete, removeMethodAppear, hideQuantity }) {
  return (
    <div className="product-checkout">
      <div className="product-checkout-information">
        <div className="name-and-quantity">
          {hideQuantity ? ('') : (<span className="how-many-itens">1x - </span>)}
          <span className="product-name">{itemCheckout.name}</span>
        </div>
        <div className="price-check">
          <span className="price-product-checkout">R$ {itemCheckout.price}</span>
        </div>
      </div>
      {removeMethodAppear ?
        (<button className="btn-remove-product-checkout" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7bbb5e" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Remover
        </button>) : ('')}
    </div>
  );
}
