import React from 'react';

import PetCareLogo from '../../Assets/PetCareLogo';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import './styles.css';

export default function PaymentWithCardModal({ cartInfo, handleSubmit }) {

  const modal = document.getElementById('id-payment-card-info');

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove('openModal-to-finish-shop');
    }
  }

  function handleClosePaymentModal() {
    modal.classList.remove('openModal-to-finish-shop');
  }

  return (
    <div id="id-payment-card-info" className="modal-payment-with-card">
      <div className="card-modal-payment">
        <div className="header-main-pet-care">
          <div className="image-company-area">
            <PetCareLogo notRedirect />
          </div>
          <div className="x-alert" role="button" onClick={handleClosePaymentModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ebeced" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
        </div>
        <div className="header-modal-payment">
          <div className="company-information">
            <h2>{cartInfo.nameCompany}</h2>
          </div>
        </div>
        <div className="information-of-shop">
          <div className="header-information-shop">
            <h3>Informações do pedido!</h3>
          </div>
          <div className="info-shop">
            <div className="area-info-shop">
              <span className="static-text">Subtotal:</span>
              <span>R$ {cartInfo.subTotal.toFixed(2)}</span>
            </div>
            <div className="area-info-shop">
              <span className="static-text total-price">Total:</span>
              <span>R$ {cartInfo.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="form-to-pay">
          <form className="form-finishing" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nome do dono do cartão." />
            <div className="card-information">
              <Input type="text" placeholder="Número do cartão" />
              <Input type="number" placeholder="CVV" min="1" max="999" />
            </div>
            <div className="expiration-date">
              <Input type="number" placeholder="Mês" min="1" max="12" />
              <Input type="number" placeholder="Ano" min="1950" max="3500" />
            </div>
            <ButtonForm text="Finalizar Compra" />
          </form>
        </div>
      </div>
    </div>
  );
}
