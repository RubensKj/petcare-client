import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';
import RedirectButton from '../../Components/RedirectButton';

import './styles.css';

export default function NotOrErrorLoading(props) {
  return (
    <>
      <HeaderMainPage props={props} validate={true} />
      <div className="container-not-or-error-loading">
        <div className="content-error-loading">
          <div className="error-area">
            <EmptyContent title="Erro ao carregar" description="Algo aconteceu durante requisição da API do PetCare. Tente novamente mais tarde." svg={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#FB4A4D" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>} />
            <RedirectButton href="/" text="Voltar ao ínicio!" />
          </div>
        </div>
      </div>
    </>
  );
}
