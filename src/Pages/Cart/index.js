import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import AlertCard from '../../Components/AlertCard';
import EmptyContent from '../../Components/EmptyContent';
import ProductCheckout from '../../Components/ProductCheckout';
import PaymentWithCardModal from '../../Components/PaymentWithCardModal';

import MoneySVG from '../../Assets/Payments/money.svg';
import CreditSVG from '../../Assets/Payments/credit-card.svg';
import DebitSVG from '../../Assets/Payments/debit-card.svg';

import './styles.css';
import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setTitleAlert, setDescriptionAlert, setSuccessedAlert } from '../../Store/Actions/Alert';
import { CARD_STATE_INITIAL } from '../../INITIALS_STATES';

export default function Cart(props) {

  // Alert
  const user = useSelector(state => state.User.data);
  const alert = useSelector(state => state.Alert);
  const dispatch = useDispatch();

  // CART
  const [cart, setCart] = useState(CARD_STATE_INITIAL);
  const [cartExistsWithItens, setCartExistsWithItens] = useState(false);

  // To Finish the order
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    let cartLocal = JSON.parse(localStorage.getItem('cartStore'));

    if (cartLocal !== null) {
      setCart(cartLocal);
      if (cartLocal.servicesItens.length > 0 || cartLocal.productsItens.length > 0) {
        setCartExistsWithItens(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartStore', JSON.stringify(cart));
  }, [cart]);

  function handleDeleteService(e, service) {
    e.preventDefault();
    setCart({ ...cart, servicesItens: cart.servicesItens.filter(itemFromList => itemFromList !== service), subTotal: ((Math.round(cart.subTotal * 100) / 100) - service.price), total: ((Math.round(cart.subTotal * 100) / 100) - service.price) });
  }

  function handleDeleteProduct(e, product) {
    e.preventDefault();
    setCart({ ...cart, productsItens: cart.productsItens.filter(itemFromList => itemFromList !== product), subTotal: ((Math.round(cart.subTotal * 100) / 100) - product.price), total: ((Math.round(cart.subTotal * 100) / 100) - product.price) });
  }

  function handleSelectPayment(event, type) {
    let btns = document.querySelectorAll('.btn-payment');
    btns.forEach(btn => {
      btn.classList.remove('selectedPayment');
    });
    let btnWillSelect = event.currentTarget;

    if (type) {
      btnWillSelect.classList.add('selectedPayment');
      switch (type) {
        case 'MONEY':
          return setPaymentMethod('MONEY');
        case 'CREDIT_CARD':
          return setPaymentMethod('CREDIT_CARD');
        case 'DEBIT_CARD':
          return setPaymentMethod('DEBIT_CARD');
        default:
          return setPaymentMethod('');
      }
    }
  }

  async function handleFinish(e) {
    e.preventDefault();

    if (user !== null && user !== undefined && (user.completeName === null || user.completeName === undefined)) {
      dispatch(setTitleAlert('Informação faltando!'));
      dispatch(setDescriptionAlert('Não foi possivel completar a comprar, devido a seu perfil estã faltando informação.'));
      dispatch(setSuccessedAlert(false));
      return;
    }

    // Cart that will go to API to get the information there
    const cartToAPI = {
      nameCompany: cart.nameCompany,
      cnpj: cart.cnpj,
      userCompleteName: user.completeName,
      companyOrderAddress: {
        street: cart.companyAddress.street,
        placeNumber: cart.companyAddress.placeNumber,
        city: cart.companyAddress.city,
        complement: cart.companyAddress.complement,
        neighborhood: cart.companyAddress.neighborhood,
        state: cart.companyAddress.state,
        cep: cart.companyAddress.cep,
      },
      emailOrderUser: user.email,
      total: cart.total,
      subTotal: cart.subTotal,
      paymentMethod: paymentMethod,
      servicesIdsCart: [],
      productsIdsCart: [],
    }

    if (cartToAPI.cnpj === null || cartToAPI.cnpj === undefined || cartToAPI.cnpj.length <= 0) {
      dispatch(setTitleAlert('Informação faltando!'));
      dispatch(setDescriptionAlert('O CNPJ da empresa não foi preenchido durante a selação dos itens, por favor tente solucioná-los novamente.'));
      dispatch(setSuccessedAlert(false));
      return;
    }

    cart.servicesItens.forEach(service => { cartToAPI.servicesIdsCart.push(service.id); });
    cart.productsItens.forEach(product => { cartToAPI.productsIdsCart.push(product.id); });

    if (paymentMethod === null || paymentMethod === '') {
      dispatch(setTitleAlert('Informação faltando!'));
      dispatch(setDescriptionAlert('Selecione algum método de pagamento para finalizar a compra.'));
      dispatch(setSuccessedAlert(false));
    }

    if (paymentMethod === 'MONEY') {
      await api.post(`/validate-is-open`, cartToAPI.cnpj).then(res => {
        if (res.data === false) {
          dispatch(setTitleAlert('Pet Shop Fechado!'));
          dispatch(setDescriptionAlert('Não foi possivel concluir a compra devido ao pet shop estar fechado.'));
          dispatch(setSuccessedAlert(false));
          return;
        } else {
          // After validate if company is open, finish the order

          // Here is the validation to check if cart contains some items
          if (cart.servicesItens.length > 0 || cart.productsItens.length > 0) {
            // Mading the request to finish the order
            api.post('/finishing-order', JSON.stringify(cartToAPI)).then(res => {
              localStorage.setItem('cartStore', JSON.stringify(CARD_STATE_INITIAL));
              dispatch(setTitleAlert('Obrigado por comprar com ' + cart.nameCompany));
              dispatch(setDescriptionAlert('Sua compra foi feita!! Você pode vê-la em seus pedidos.'));
              dispatch(setSuccessedAlert(true));
              props.history.push('/pedidos');
            });
          } else {
            dispatch(setTitleAlert('Sacola vázia!'));
            dispatch(setDescriptionAlert('Não foi possivel completar a comprar, devido a sua sacola estar vázia.'));
            dispatch(setSuccessedAlert(false));
          }
        }
      });
    }
    if (paymentMethod === 'CREDIT_CARD' || paymentMethod === 'DEBIT_CARD') {
      let modal = document.getElementById('id-payment-card-info');
      modal.classList.add('openModal-to-finish-shop');
    }
  }

  const address = cart.companyAddress;

  return (
    <>
      <HeaderMainPage props={props} validate={true} />
      <div className="container-cart">
        <PaymentWithCardModal cartInfo={cart} />
        <AlertCard alert={alert} />
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
                <button className="btn-payment" onClick={(event) => handleSelectPayment(event, 'MONEY')}>
                  <span>Dinheiro</span>
                  <img className="money-payment" src={MoneySVG} alt="Money Payment" />
                </button>
                <button className="btn-payment" onClick={(event) => handleSelectPayment(event, 'CREDIT_CARD')}>
                  <span>Crédito</span>
                  <img className="credit-payment" src={CreditSVG} alt="Money Payment" />
                </button>
                <button className="btn-payment" onClick={(event) => handleSelectPayment(event, 'DEBIT_CARD')}>
                  <span>Débito</span>
                  <img className="debit-payment" src={DebitSVG} alt="Money Payment" />
                </button>
              </div>
              <div className="request-button" onClick={(e) => handleFinish(e)}>
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
                  {cart.servicesItens.length > 0 || cart.productsItens.length > 0 ? (
                    <>
                      {cart.servicesItens.map(service => <ProductCheckout key={service.id} itemCheckout={service} handleDelete={(e) => handleDeleteService(e, service)} removeMethodAppear={true} hideQuantity />)}
                      {cart.productsItens.map(product => <ProductCheckout key={product.id} itemCheckout={product} handleDelete={(e) => handleDeleteProduct(e, product)} removeMethodAppear={true} />)}
                    </>
                  ) : (<EmptyContent title="Seu carrinho!" description="Adicione algum serviço para aparecer aqui." />)}
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
