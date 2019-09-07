import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';
import EmptyContent from '../../Components/EmptyContent';
import Subtitle from '../../Components/Subtitle';

import api from '../../Services/api';

import './styles.css';

export default function Favorites(props) {
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
      <HeaderMainPage props={props} />
      <div className="container-favorites">
        <div className="content-favorites">
          <div className="content-list-favorites">
            <Subtitle text="Meus favoritos" />
            {favoritesCompanies ? (
              <>
                <div className="list-favorites">
                  {favoritesCompanies.map(company => <CompanyCard key={company.id} company={company} />)}
                </div>
              </>
            ) : (
                <>
                  <EmptyContent title="Sua lista de favoritos!" description="Favorite um pet shop para que ele apareça aqui." svg={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="#ebeced" stroke="#ebeced" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>} />
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
}
