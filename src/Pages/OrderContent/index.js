import React, { useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import TransitionOfSetting from '../../Components/TransitionOfSetting';
import AreaOrder from '../../Components/AreaOrder';
import PriceArea from '../../Components/PriceArea';
import ProductCheckout from '../../Components/ProductCheckout';

import './styles.css';

export default function OrderContent(props) {

  const INITIAL_STATE = {
    name: 'Nome do produtoooooooo',
    price: 69.99,
  }

  const [product, setProduct] = useState(INITIAL_STATE);

  return (
    <>
      <HeaderMainPage props={props} validate={true} />
      <div className="container-order-page">
        <div className="content-order-page">
          <TransitionOfSetting title={`Pedido: ` + '#7238648'} description={`Informações do pedido realizado com ` + 'BlumenGarten'} />
          <div className="name-order-company">
            <h1>BlumenGarten</h1>
          </div>
          <AreaOrder staticText="Status:" info="em Andamento.." />
          <AreaOrder staticText="Data do pedido:" info="29/02/2003 - 20:33" />
          <AreaOrder staticText="Forma de pagamento:" info="Dinheiro" />
          <AreaOrder staticText="Endereço:" info="Rua 7 de Setembro, 389" />
          <div className="list-itens-bought">
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
          </div>
          <div className="list-itens-bought">
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
            <ProductCheckout itemCheckout={product} />
          </div>
          <PriceArea staticText="Total" info="R$ 69.99" />
        </div>
      </div>
    </>
  );
}
