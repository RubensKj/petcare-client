import React from 'react';

import './styles.css';

export default function ModalDelete({ idDiv, handleDeleteCart }) {

  function handleCancel() {
    let modal = document.querySelector('.modal-delete');
    modal.classList.remove('openModal');
  }

  return (
    <>
      <div id={idDiv} className="modal-delete">
        <div className="card-delete">
          <div className="content-card">
            <h1>Atenção!</h1>
            <span>Você tem certeza que quer deletar os itens que possuem em seu carrinho!</span>
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