import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import EmptyContent from '../../Components/EmptyContent';

import './styles.css';

export default function SearchResult(props) {
  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-list-results">
        <div className="content-list-results">
          <div className="content-list">
            <div className="title-results">
              <h2>Lista de resultados</h2>
              <div className="transition-small" />
            </div>
            {false ? (
              <>
                <div className="list-results">
                  {/*favoritesCompanies.map(company => <CompanyCard key={company.id} company={company} />)*/}
                </div>
              </>
            ) : (
                <>
                  <EmptyContent title="Lista de resultados!" description="Não existe nenhum pet shop com este nome." svg={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#ebeced" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>} />
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
}
