import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';

import './styles.css';

export default function WrongURL() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-wrong-url">
        <div className="content-wront-url">
          <EmptyContent title="URL inválido!" description="Está página não existe, ou está em manutenção" />
        </div>
      </div>
    </>
  );
}
