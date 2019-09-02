import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';

import api from '../../Services/api';

import './styles.css';

export default function Favorites() {
  const [favoritesCompanies, setFavoritesCompanies] = useState([]);

  async function loadFavorites(page) {
    await api.get(`/users/favorites-list/${page}`).then(res => {
      setFavoritesCompanies(res.data.content);
    });
  }

  useEffect(() => {
    loadFavorites(0);
  }, []);

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
              {favoritesCompanies.map(company => <CompanyCard key={company.id} company={company} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
