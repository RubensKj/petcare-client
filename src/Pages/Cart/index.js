import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import ProductCheckout from '../../Components/ProductCheckout';

import MoneySVG from '../../Assets/Payments/money.svg';
import CreditSVG from '../../Assets/Payments/credit-card.svg';
import DebitSVG from '../../Assets/Payments/debit-card.svg';

import './styles.css';

export default function Cart() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-cart">
        <div className="content-cart">
          <div className="checkout-payment">
            <h1 className="title-order">Finalize seu pedido</h1>
            <div className="company-address">
              <h2>Localização do estabelecimento</h2>
              <p>Nome da rua, 123</p>
              <p>Bairro - Cidade/UF</p>
              <p>CEP: 00000-000</p>
            </div>
            <div className="title-payment">
              <h2>Forma de pagamento</h2>
            </div>
            <div className="payment-options">
              <button className="btn-payment">
                <span>Dinheiro</span>
                <img className="money-payment" src={MoneySVG} alt="Money Payment" />
              </button>
              <button className="btn-payment">
                <span>Crédito</span>
                <img className="credit-payment" src={CreditSVG} alt="Money Payment" />
              </button>
              <button className="btn-payment">
                <span>Débito</span>
                <img className="debit-payment" src={DebitSVG} alt="Money Payment" />
              </button>
            </div>
            <div className="request-button">
              <button className="btn-finish-pay"><span>Finalizar pedido</span></button>
            </div>
          </div>
          <div className="checkout-cart">
            <form className="form-checkout">
              <div className="header-form-checkout">
                <h3 className="order-information">Informações do seu pedido</h3>
                <h2 className="company-name-order">Nome do estabelecimento</h2>
              </div>
              <hr />
              <div className="products-checkout">
                <ProductCheckout />
              </div>
              <hr />
              <div className="total-products">
                <div className="subtotal-span">
                  <span className="product-value">Subtotal</span>
                </div>
                <div className="price-subtotal">
                  <span>R$ 0.00</span>
                </div>
              </div>
              <hr />
              <div className="total-products">
                <div className="total-span">
                  <span className="products-total">Total</span>
                </div>
                <div className="price-total">
                  <span>R$ 0.00</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
