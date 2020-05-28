import React from 'react';

import './styles.css';

export default function ServiceCardToUser({ service, onClick }) {
  return (
    <div className="service" role="button" onClick={onClick}>
      <div className="service-information">
        <div className="title-service">
          <h3>{service.name}</h3>
        </div>
        <div className="description-service">
          <p>{service.description}</p>
        </div>
        <div className="price-service">
          <p className="unity">R$</p>
          <p>{service.price}</p>
        </div>
      </div>
    </div>
  );
}
