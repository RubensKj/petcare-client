import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import CompanyCard from '../../Components/CompanyCard';

import api from '../../Services/api';

import './styles.css';

export default function Main() {
  const [companies, setCompanies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  async function loadCompanies(page) {
    await api.get(`/companies/${page}`).then(res => {
      console.log(res.data);
      setCompanies(res.data.content);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    loadCompanies(0);
  }, [])

  return (
    <>
      <HeaderMainPage />
      <div className="container-main">
        <div className="favorites-petshops">
          <div className="header-list-favorites">
            <div className="title-list">
              <h2>Meus Favoritos</h2>
            </div>
          </div>
          <div id="content-list-favorites" className="content-list-favorites">
            <div className="list-favorites">
              {/* <CompanyCard /> */}
            </div>
          </div>
        </div>
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
                <form className="form-search">
                  <input type="text" placeholder="Pesquisar por uma empresa." />
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </form>
              </div>
            </div>
          </div>
          <div className="list-petshops">
            {companies.map(company => <CompanyCard key={company.id} company={company} />)}
          </div>
        </div>
      </div>
    </>
  );
}
