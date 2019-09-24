import React, { useState } from 'react';

import BottomProductOpenInfo from '../../Components/BottomProductOpenInfo';
import ModalProduct from '../../Components/ModalProduct';

import './styles.css';

export default function ProductBottomInfo({ product }) {

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenInfo() {
    setIsOpen(true);
  }

  return (
    <>
      <div className={isOpen ? ('info-product open-info-product') : ('info-product')}>
        <ModalProduct product={product} setIsOpen={setIsOpen} />
      </div>
      <BottomProductOpenInfo onClick={() => handleOpenInfo()} />
    </>
  );
}
