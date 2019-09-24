import React, { useState } from 'react';

import BottomProductOpenInfo from '../../Components/BottomProductOpenInfo';

import './styles.css';

export default function ProductBottomInfo({ product }) {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className={isOpen ? ('info-product open-info-product') : ('info-product')}>
        <div className="information-product-in-card">
          <span className="static-text-title">Descrição</span>
          <div className="description-area-hover">
            <span>{product.description}</span>
          </div>
          <div className="transgenic-area">
            <span className="static-text">Transgenicos:</span>
            <span className="product-text">{product.transgenic}</span>
          </div>
          <div className="fot-which-pet-area">
            <div className="area-pet-area">
              <span className="static-text">Indicado:</span>
              <span className="product-text">{product.indicationPet}</span>
            </div>
            <div className="area-pet-area">
              <span className="static-text">Porte:</span>
              <span className="product-text">{product.porte}</span>
            </div>
            <div className="area-pet-area">
              <span className="static-text">Idade:</span>
              <span className="product-text">{product.age}</span>
            </div>
          </div>
          <div className="composition-area">
            <span className="static-text-title">Composição</span>
            <span>{product.composition}</span>
          </div>
        </div>
      </div>
      <BottomProductOpenInfo onClick={() => null} />
    </>
  );
}
