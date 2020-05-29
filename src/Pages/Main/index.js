import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import AlertCard from '../../Components/AlertCard';
import Subtitle from '../../Components/Subtitle';
import ListSkeletonsCards from '../../Components/ListSkeletonsCards';
import CompanyCard from '../../Components/CompanyCard';
import BottomLoadMore from '../../Components/BottomLoadMore';
import BottomCart from '../../Components/BottomCart';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';
import { setTitleAlert, setDescriptionAlert, setSuccessedAlert } from '../../Store/Actions/Alert';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';

export default function Main(props) {
  // USER
  const state = useSelector(state => state.User);
  const alert = useSelector(state => state.Alert);
  const dispatch = useDispatch();

  // COMPANIES
  const [companies, setCompanies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // FAVORITES
  const [favoritesCompanies, setFavoritesCompanies] = useState([]);
  const [containsFavorites, setContainsFavorites] = useState(false);

  // SEARCH TEXT
  const [searchText, setSearchText] = useState('');

  // NEARBY
  // const [actPageNearby, setActPageNearby] = useState(0);

  let cartLocal = JSON.parse(localStorage.getItem('cartStore'));

  async function loadCompanies(page) {
    await api.get(`/companies/${page}`).then(res => {
      setCompanies(res.data.content);
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      setIsLoading(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(".btn-loadMore-companies-main");
        if (btn !== null) {
          btn.classList.add("not-visible-loadMore");
        }
      }
    });
  }

  async function loadFavorites(page) {
    await api.get(`/users/favorites-list/${page}`).then(res => {
      setFavoritesCompanies(res.data.content);
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchText.length > 0 && searchText.trim()) {
      props.history.push(`/lista-resultados/${searchText}`);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    loadCompanies(0);
    if (state.data.favorites && state.data.favorites.length >= 1) {
      setContainsFavorites(true);
      loadFavorites(0);
    }
  }, [state.data.favorites, totalPages]);

  useEffect(() => {
    if ((actPage + 1) >= totalPages && isLoading === false) {
      let btn = document.querySelector(".btn-loadMore-companies-main");
      btn.classList.add("not-visible-loadMore");
    }
  }, [companies, totalPages, isLoading, actPage])

  async function handleButtonLoadMore(page) {
    await api.get(`/companies/${page}`).then(res => {
      setCompanies(companies.concat(res.data.content));
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(".btn-loadMore-companies-main");
        btn.classList.add("not-visible-loadMore");
      }
    });
  }

  async function handleNearbyButton(page) {
    if (isAuthenticated()) {
      await api.get(`/companies-nearby/${page}`).then(res => {
        if (res.data !== "") {
          setCompanies(res.data.content);
          if (res.data.totalPages <= 1) {
            let btn = document.querySelector(".btn-loadMore-companies-main");
            btn.classList.add("not-visible-loadMore");
          }
        } else {
          dispatch(setTitleAlert('Endereço faltando no perfil!'));
          dispatch(setDescriptionAlert('Por favor edite as informações sobre o endereço em seu perfil para utilizar desta função!'));
          dispatch(setSuccessedAlert(false));
        }
      });
    } else {
      dispatch(setTitleAlert('Necessário estar autenticado!'));
      dispatch(setDescriptionAlert('Para aparecer os pet shops mais próximos é necessário estar autenticado na aplicação e com usuário com endereço cadastrado!'));
      dispatch(setSuccessedAlert(false));
    }
  }

  async function handleMostRateds(page) {
    await api.get(`/companies-most-rated/${page}`).then(res => {
      setCompanies(res.data.content);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(".btn-loadMore-companies-main");
        btn.classList.add("not-visible-loadMore");
      }
    });
  }

  return (
    <>
      <HeaderMainPage props={props} validate={false} />
      <div className="container-main">
        <AlertCard alert={alert} />
        {containsFavorites ? (
          <>
            <div className="favorites-petshops">
              <div className="header-list-favorites">
                <Subtitle text="Meus Favoritos" />
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
            <Subtitle text="Pet shops" />
            <div className="actions-content-list-petshop">
              <div className="btn-actions-search">
                <button onClick={() => handleMostRateds(0)}>Relevância</button>
                <button onClick={() => handleNearbyButton(0)}>Próximos</button>
              </div>
              <div className="search-listpetshop">
                <form className="form-search" onSubmit={(e) => handleSearch(e)}>
                  <input type="text" name="search" placeholder="Pesquisar por uma empresa." onChange={(e) => setSearchText(e.target.value)} />
                  <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </form>
              </div>
            </div>
          </div>
          {isLoading ? (<ListSkeletonsCards numberCards={6} />) : (
            <>
              <div className="list-petshops">
                {companies && companies.map(company => <CompanyCard key={company.id} company={company} />)}
              </div>
              <BottomLoadMore setClassName="btn-loadMore-companies-main" text="Carregar mais empresas" onClick={() => handleButtonLoadMore(actPage + 1)} />
            </>
          )}
        </div>
      </div>
      <BottomCart cart={cartLocal} />
    </>
  );
}
