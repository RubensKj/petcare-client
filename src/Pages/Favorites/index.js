import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';

import './styles.css';

export default function Favorites() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-favorites">
        <div className="content-favorites">
          <div className="content-list-favorites">
            <div className="title-list">
              <h2>Meus favoritos</h2>
              <div className="transition-small" />
            </div>
            <div className="list-favorites">
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
