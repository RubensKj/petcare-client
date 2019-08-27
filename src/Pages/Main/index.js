import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';

import './styles.css';

export default function Main() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-main">
        <div className="favorites-petshops">
          <div className="header-list-favorites">
            <div className="title-list">
              <h2>Meus Favoritos</h2>
            </div>
          </div>
          <div id="content-list-favorites" className="content-list-favorites">
            <div className="list-favorites">
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </div>
          </div>
        </div>
        <div className="petshops">
          <div className="header-list-petshops">
            <div className="title-list">
              <h2>Pet shops</h2>
            </div>
            <div className="actions-content-list-petshop">
              <div className="btn-actions-search">
                <button>Relevancia</button>
                <button>Proximos</button>
              </div>
              <div className="search-listpetshop">
                <form className="form-search">
                  <input type="text" placeholder="Pesquisar por uma empresa." />
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </form>
              </div>
            </div>
          </div>
          <div className="list-petshops">
            <CompanyCard text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker." />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
        </div>
      </div>
    </>
  );
}
