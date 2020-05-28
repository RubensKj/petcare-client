import React from 'react';

import PetCareLogo from '../../Assets/PetCareLogo';

import './styles.css';

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="content-footer">
        <div className="left-side-footer">
          <div className="image-area">
            <PetCareLogo />
          </div>
          <div className="list-footer">
            <a href="/termos">Termos</a>
            <a href="/sobre">Sobre</a>
            <a href="/redes-sociais">Redes sociais</a>
          </div>
        </div>
      </div>
    </div>
  );
}
