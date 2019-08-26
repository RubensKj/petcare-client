import React from 'react';

import PawLogo from '../../Assets/PawLogo';

import './styles.css';

export default function CompanyCard({ text, company }) {
  return (
    <a href="/companies/:id" className="link-company">
      <div className="box-company">
        <div className="image-area">
          <img src="https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/36919020_268531707232126_6615945512266760192_n.jpg?_nc_cat=104&_nc_oc=AQkJPs5v7b4HMDT2O3z80BpN4F_B39qeODGWldufRCfrbgr4STSZvcYMIY8fISt3Tfs&_nc_ht=scontent.fbnu1-1.fna&oh=966814cabc66292e997ba08a471336e4&oe=5E134CF4" alt="Company Logo" />
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
