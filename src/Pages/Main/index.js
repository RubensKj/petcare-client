import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';

import './styles.css';

export default function Main() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-main">
        <div className="petshops">
          <div className="header-list-petshops">
            <div className="title-list">
              <h2>Pet shops</h2>
            </div>
            <div className="actions-content-list-petshop">
              <button>Relevancia</button>
              <button>Proximos</button>
              <div className="search-listpetshop">
                <input type="text" />
                <button>Pesquisar</button>
              </div>
            </div>
          </div>
          <div className="list-petshops">
            <CompanyCard text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker." />
            <CompanyCard />
          </div>
        </div>
      </div>
    </>
  );
}
