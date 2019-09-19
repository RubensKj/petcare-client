import React from 'react';

import './styles.css';

export default function BottomCart({ cart }) {

  let totalItens = (cart.productsItens.length + cart.servicesItens.length)

  return (
    <a href="/sacola" className={cart.nameCompany !== null && cart.nameCompany.length > 0 && totalItens > 0 ? ('bottom-card-cart opened-cart-bottom') : ('bottom-card-cart')}>
      <div className="area-cart">
        <div className="info-of-area">
          <div className="header-left">
            <span className="cart-title">Seu carrinho -</span>
            <span className="company-name">{cart.nameCompany}</span>
          </div>
          <div className="informations-carts">
            <div className="total-itens-number">
              <div className="total">
                <span>({totalItens}) Itens</span>
              </div>
            </div>
            <div className="total-price">
              <div className="area-total-price">
                <span>Total: R$ {cart.total ? (cart.total.toFixed(2)) : ('0.00')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
