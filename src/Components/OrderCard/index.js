import React from 'react';

import './styles.css';

export default function OrderCard({ order, finished }) {
  const date = order.createdOrderAt.split("-").join("/")
  const address = order.companyOrderAddress;

  return (
    <a href={`/pedidos/${order.id}`} className={finished ? ('order-card finished') : ('order-card')}>
      <div className="content-order">
        <div className="image-card">
          <img src="https://scontent.fcwb2-1.fna.fbcdn.net/v/t1.0-9/36919020_268531707232126_6615945512266760192_n.jpg?_nc_cat=104&_nc_oc=AQko23jqhSEdfdI0hGPYOHjdTZOoXcvXCYhUNdiqWIcHM3i7zdB2eLqlqzE4EdhKErc&_nc_ht=scontent.fcwb2-1.fna&oh=ed883d3681026683bcadcbc8a4d909b0&oe=5E134CF4" alt="Company Logo Order Card" />
        </div>
        <div className="card-information-order">
          <div className="header-card">
            <div className="title-card-order">
              <h1>Pedido:</h1>
              <h1 className="number-order">#{order.id}</h1>
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
          <div className="footer-card">
            <div className="price-card">
              <span>R$</span>
              <span className="price-number">{order.total}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
