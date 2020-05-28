import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';
import CompanyCard from '../../Components/CompanyCard';
import BottomLoadMore from '../../Components/BottomLoadMore';
import Loading from '../../Components/Loading';

import api from '../../Services/api';

import './styles.css';

export default function SearchResult(props) {

  // BUTTON LOAD MORE
  const btnLoadMore = '.btn-loadMore-searched';
  const hideClass = 'hide-button-load-more-searched';

  const [searchParam, setSearchParam] = useState('');
  const [searchedCompanies, setSearchedCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);

  async function searchByCompanyName(text, page) {
    if (text.length > 0) {
      await api.get(`/companies-searched/${page}/${text}`).then(res => {
        setSearchedCompanies(res.data.content);
        setTotalPages(res.data.totalPages);
        setActPage(res.data.number);
        setIsLoading(false);
        if (res.data.totalPages <= 1) {
          let btn = document.querySelector(btnLoadMore);
          if (btn !== null) {
            btn.classList.add(hideClass);
          }
        }
      });
    }
  }

  useEffect(() => {
    setSearchParam(props.match.params.search);
    searchByCompanyName(searchParam, 0);
  }, [props.match.params.search, searchParam]);

  useEffect(() => {
    if ((actPage + 1) >= totalPages) {
      let btn = document.querySelector(btnLoadMore);
      if (btn !== null) {
        btn.classList.add(hideClass);
      }
    }
  }, [actPage, totalPages]);

  async function loadMoreCompaniesFromSearched(page, text) {
    if (text.length > 0) {
      await api.get(`/companies-searched/${page}/${text}`).then(res => {
        setSearchedCompanies(searchedCompanies.concat(res.data.content));
        setActPage(res.data.number);
      });
    }
  }

  return (
    <>
      <HeaderMainPage props={props} validate={false} />
      <div className="container-list-results">
        <div className="content-list-results">
          <div className="content-list">
            <div className="title-results">
              <h2>Lista de resultados com {searchParam}</h2>
              <div className="transition-small" />
            </div>
            {isLoading ? (<Loading />) : (
              <>
                {searchedCompanies.length > 0 ? (
                  <>
                    <div className="list-results">
                      {searchedCompanies.map(company => <CompanyCard key={company.id} company={company} />)}
                    </div>
                    <BottomLoadMore onClick={() => loadMoreCompaniesFromSearched((actPage + 1), searchParam)} setClassName="btn-loadMore-searched" text="Carregar mais sobre a busca" />
                  </>
                ) : (
                    <>
                      <EmptyContent title="Lista de resultados!" description="Não existe nenhum pet shop com este nome." svg={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#ebeced" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>} />
                    </>
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
