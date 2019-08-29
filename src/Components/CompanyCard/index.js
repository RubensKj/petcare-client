import React from 'react';

import PawLogo from '../../Assets/PawLogo';

import './styles.css';

export default function CompanyCard({ text, company }) {
  return (
    <a href="/companies/:id" className="link-company">
      <div className="box-company">
        <div className="image-area">
          <img src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" alt="Company Logo" />
        </div>
        <div className="company-information">
          <div className="name-petshop">
            <h1>Blumen Garten PETSHOP</h1>
          </div>
          <div className="description-petshop">
            <span>{text}</span>
          </div>
          <div className="paws-status">
            <div className="rate-paw">
              <span>4.7</span>
              <PawLogo height="16" width="16" />
            </div>
            <div className="transition-dot" />
            <div className="status">
              <span>Fechado</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
