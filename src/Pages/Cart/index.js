import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';
import ProductCheckout from '../../Components/ProductCheckout';

import MoneySVG from '../../Assets/Payments/money.svg';
import CreditSVG from '../../Assets/Payments/credit-card.svg';
import DebitSVG from '../../Assets/Payments/debit-card.svg';

import './styles.css';

export default function Cart(props) {

  // CARD STATE
  const INITIAL_STATE_CARD = {
    nameCompany: '',
    companyAddress: {
      street: '',
      placeNumber: '',
      city: '',
      complement: '',
      neighborhood: '',
      state: '',
      cep: '',
    },
    email: '',
    total: 0,
    subTotal: 0,
    servicesItens: [],
    productsItens: [],
  }

  // CART
  const [cart, setCart] = useState(INITIAL_STATE_CARD);
  const [cartExistsWithItens, setCartExistsWithItens] = useState(false);

  useEffect(() => {
    let cartLocal = JSON.parse(localStorage.getItem('cartStore'));

    if (cartLocal !== null) {
      setCart(cartLocal);
      if (cartLocal.servicesItens.length > 0) {
        setCartExistsWithItens(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartStore', JSON.stringify(cart));
  }, [cart]);

  function handleDelete(e, item) {
    e.preventDefault();
    setCart({ ...cart, servicesItens: cart.servicesItens.filter(itemFromList => itemFromList !== item), subTotal: ((Math.round(cart.subTotal * 100) / 100) - item.price), total: ((Math.round(cart.subTotal * 100) / 100) - item.price) });
  }

  const address = cart.companyAddress;

  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-cart">
        {cartExistsWithItens ? (
          <div className="content-cart">
            <div className="checkout-payment">
              <h1 className="title-order">Finalize seu pedido</h1>
              <div className="company-address">
                <h2>Localização do estabelecimento</h2>
                <p>{address.street + ', ' + address.placeNumber + (address.complement ? (' - ' + address.complement) : (''))}</p>
                <p>{address.neighborhood + ' - ' + address.city + '/' + address.state}</p>
                <p>CEP: {address.cep}</p>
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
                  <h2 className="company-name-order">{cart.nameCompany}</h2>
                </div>
                <hr />
                <div className="products-checkout">
                  {cart.servicesItens.length > 0 ? (cart.servicesItens.map(item => <ProductCheckout key={item.id} itemCheckout={item} handleDelete={(e) => handleDelete(e, item)} />)) : (<EmptyContent title="Seu carrinho!" description="Adicione algum serviço para aparecer aqui." />)}
                </div>
                <hr />
                <div className="total-products">
                  <div className="subtotal-span">
                    <span className="product-value">Subtotal</span>
                  </div>
                  <div className="price-subtotal">
                    <span>R$ {cart.subTotal.toFixed(2)}</span>
                  </div>
                </div>
                <hr />
                <div className="total-products">
                  <div className="total-span">
                    <span className="products-total">Total</span>
                  </div>
                  <div className="price-total">
                    <span>R$ {cart.total.toFixed(2)}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (<EmptyContent title="Seu Carrinho!" description="Você não possui nada no seu carrinho, adicione algum item para poder visualizá-lo." svg={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#ebeced" strokeWidth="3" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>} />)}
      </div>
    </>
  );
}
