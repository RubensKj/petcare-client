import React from 'react';

import ProductCheckout from '../ProductCheckout';
import ButtonToOnClick from '../ButtonToOnClick';

import './styles.css';

export default function DropDownCart({ props }) {
  return (
    <>
      <aside id="sidebar-menu-cart" className="sidebar-cart">
        <div className="container-sidebar-cart">
          <div className="company-list-menu">
            <div className="header-form-checkout">
              <h3 className="order-information">Informações do seu pedido</h3>
              <h2 className="company-name-order">Nome do estabelecimento</h2>
            </div>
            <div className="products-checkout">
              <ProductCheckout />
              <ProductCheckout />
              <ProductCheckout />
              <ProductCheckout />
              <ProductCheckout />
            </div>
            <div className="subtotal-price">
              <div className="subtotal-span">
                <span className="product-value">Subtotal</span>
              </div>
              <div className="price-subtotal">
                <span>R$ 0.00</span>
              </div>
            </div>
            <ButtonToOnClick text="Finalizar o pedido" />
          </div>
        </div>
      </aside>
    </>
  );
}
