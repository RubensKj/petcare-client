import React from 'react';

import './styles.css';

export default function ModalDelete({ handleDeleteCart }) {

  const modal = document.getElementById('id-modal-delete-cart');

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.remove('openModal');
    }
  }

  function handleCancel() {
    let modal = document.querySelector('.modal-delete');
    modal.classList.remove('openModal');
  }

  return (
    <>
      <div id="id-modal-delete-cart" className="modal-delete">
        <div className="card-delete">
          <div className="content-card">
            <h1>Deletar Carrinho?</h1>
            <span>
              Deletando seu carrinho você irá perder: <br />
                - Serviços adicionados <br />
                - Produtos adicionados
            </span>
          </div>
          <div className="buttons-actions">
            <div className="delete-button" onClick={handleDeleteCart}>
              <button>Deletar</button>
            </div>
            <div className="cancel-button" onClick={handleCancel}>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};