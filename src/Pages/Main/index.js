import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Loading from '../../Components/Loading';
import CompanyCard from '../../Components/CompanyCard';

import api from '../../Services/api';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Main(props) {
  // USER
  const state = useSelector(state => state.User);

  // COMPANIES
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // FAVORITES
  const [favoritesCompanies, setFavoritesCompanies] = useState([]);
  const [containsFavorites, setContainsFavorites] = useState(false);
  
  // SEARCH TEXT
  const [searchText, setSearchText] = useState('');

  async function loadCompanies(page) {
    await api.get(`/companies/${page}`).then(res => {
      setCompanies(res.data.content);
      setIsLoading(false);
    });
  }

  async function loadFavorites(page) {
    await api.get(`/users/favorites-list/${page}`).then(res => {
      setFavoritesCompanies(res.data.content);
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    if(searchText.length > 0) {
      props.history.push(`/pet-shops?search=${searchText}`);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    loadCompanies(0);
    if (state.data.favorites.length >= 1) {
      setContainsFavorites(true);
      loadFavorites(0);
    }
  }, [state.data.favorites]);

  return (
    <>
      <HeaderMainPage />
      <div className="container-main">
        {containsFavorites ? (
          <>
            <div className="favorites-petshops">
              <div className="header-list-favorites">
                <div className="title-list">
                  <h2>Meus Favoritos</h2>
                </div>
              </div>
              <div id="content-list-favorites" className="content-list-favorites">
                <div className="list-favorites">
                  {favoritesCompanies.map(company => <CompanyCard key={company.id} company={company} />)}
                </div>
              </div>
            </div>
          </>
        ) : ('')}
        <div className="petshops">
          <div className="header-list-petshops">
            <div className="title-list">
              <h2>Pet shops</h2>
            </div>
            <div className="actions-content-list-petshop">
              <div className="btn-actions-search">
                <button>Relevância</button>
                <button>Próximos</button>
              </div>
              <div className="search-listpetshop">
                <form className="form-search" onSubmit={(e) => handleSearch(e)}>
                  <input type="text" name="search" placeholder="Pesquisar por uma empresa." onChange={(e) => setSearchText(e.target.value)} />
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </form>
              </div>
            </div>
          </div>
          {isLoading ? (<Loading />) : (
            <div className="list-petshops">
              {companies.map(company => <CompanyCard key={company.id} company={company} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
