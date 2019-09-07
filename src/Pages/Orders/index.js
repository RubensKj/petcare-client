import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';
import OrderCard from '../../Components/OrderCard';
import Subtitle from '../../Components/Subtitle';

import './styles.css';

export default function Orders(props) {
  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-orders">
        <div className="content-orders">
          <Subtitle text="Pedidos" />
          <div className="list-orders">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          <Subtitle text="Finalizados" />
        </div>
      </div>
    </>
  );
}
