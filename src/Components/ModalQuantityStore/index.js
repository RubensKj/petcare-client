import React from 'react';

import './styles.css';

export default function ModalQuantityStore({ isOpen, setIsOpen }) {
  
  function handleCloseModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? ('modal-quantity-store openModal-quantity-store') : ('modal-quantity-store')}>
      <div className="card-quantity-store">
        <div className="header-quantity-store">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FB4A4D" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
        </div>
        <div className="information-area-quantity-store">
          <div className="content-quantity">
            <h3>Produto fora de estoque!</h3>
            <span>Desculpe pela inconveniência, o produto solicitado está em falta no momento. A empresa estará resolvendo o quanto antes.</span>
          </div>
          <div className="button-close" role="button" onClick={handleCloseModal}>
            <span>Fechar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
