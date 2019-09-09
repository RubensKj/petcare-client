import React from 'react';

import './styles.css';

export default function OrderCard({ order, finished }) {
  const date = order.createdOrderAt.split("-").join("/")
  const address = order.companyOrderAddress;

  return (
    <a href={`/pedidos/${order.id}`} className={finished ? ('order-card finished') : ('order-card')}>
      <div className="content-order">
        <div className="card-information-order">
          <div className="header-card">
            <div className="title-card-order">
              <h1>Pedido:</h1>
              <h1 className="number-order">#{order.id}</h1>
            </div>
            <div className="company-area-name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#394458" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
              <data>{order.nameCompany}</data>
            </div>
            <div className="date-of-order">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#394458" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <data>{date}</data>
            </div>
          </div>
          <div className="address-area-order">
            <div className="address-order">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#394458" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>{address.street + ', ' + address.placeNumber + (address.complement ? (' - ' + address.complement) : (''))}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
