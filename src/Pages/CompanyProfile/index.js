import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Loading from '../../Components/Loading';
import FavoriteButton from '../../Components/FavoriteButton';
import AddressInfo from '../../Components/AddressInfo';
import StatusInfo from '../../Components/StatusInfo';
import ServiceCardToUser from '../../Components/ServiceCardToUser';
import ProductCard from '../../Components/ProductCard';
import BottomLoadMore from '../../Components/BottomLoadMore';

import PawLogo from '../../Assets/PawLogo';
import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import api from '../../Services/api';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Preview(props) {
  // USER
  const state = useSelector(state => state.User);

  // COMPANY
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // FAVORITE
  const [isFavorite, setIsFavorite] = useState(false);

  // SERVICES
  const [services, setServices] = useState([]);
  const [servicesActPage, setServicesActPage] = useState(0);
  const [servicesTotalPage, setServicesTotalPage] = useState(0);
  const [isLoadingServices, setIsLoadingServices] = useState(false);

  // PRODUCTS

  const [products, setProducts] = useState([]);
  const [productsActPage, setProductsActPage] = useState(0);
  const [productsTotalPage, setProductsTotalPage] = useState(0);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  async function loadServicesFromCompanies(id, page) {
    setIsLoadingServices(true);
    await api.get(`/company-services/${id}/${page}`).then(res => {
      setServicesActPage(res.data.number);
      setServicesTotalPage(res.data.totalPages);
      setServices(res.data.content);
      setIsLoadingServices(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(".btn-loadServices");
        btn.classList.add("button-load-more-no-content");
      }
    })
  }

  async function loadProductsFromCompanies(id, page) {
    setIsLoadingProducts(true);
    await api.get(`/company-products/${id}/${page}`).then(res => {
      setProductsActPage(res.data.number);
      setProductsTotalPage(res.data.totalPages);
      setProducts(res.data.content);
      setIsLoadingProducts(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(".btn-loadProducts");
        btn.classList.add("button-load-more-no-content");
      }
    })
  }

  useEffect(() => {
    setIsLoading(true);
    if (state.data.favorites) {
      setIsFavorite(state.data.favorites.includes(company.id));
    }
    async function loadCompanyById(id) {
      await api.get(`/companies-list/${id}`).then(res => {
        setCompany(res.data);
        setIsLoading(false);
        const rate = Math.floor(company.rate);
        for (var i = 0; i < rate; i++) {
          let paws = document.querySelectorAll(".paw-preview");
          paws[i].classList.add('faw-rating');
        }
      });
    }
    loadCompanyById(props.match.params.id);
    if (company.id) {
      loadServicesFromCompanies(company.id, 0);
      loadProductsFromCompanies(company.id, 0);
    }
  }, [props.match.params.id, company.id, company.rate, state.data])


  // FUNCTIONS

  async function handleLoadMoreServices(page) {
    if (page < servicesTotalPage) {
      await api.get(`/company-services/${company.id}/${page}`).then(res => {
        setServicesActPage(res.data.number);
        setServicesTotalPage(res.data.totalPages);
        setServices(services.concat(res.data.content));
      })
    } else {
      let btn = document.querySelector(".btn-loadServices");
      btn.classList.add("button-load-more-no-content");
    }
  }

  async function handleLoadMoreProducts(page) {
    if (page < productsTotalPage) {
      await api.get(`/company-products/${company.id}/${page}`).then(res => {
        setProductsActPage(res.data.number);
        setProductsTotalPage(res.data.totalPages);
        setProducts(products.concat(res.data.content));
      })
    } else {
      let btn = document.querySelector(".btn-loadProducts");
      btn.classList.add("button-load-more-no-content");
    }
  }

  function selectItem(event, service) {
    let selectedDiv = event.currentTarget;
    if (!selectedDiv.classList.className === "selectedItem") {
      if (localStorage.getItem('cart') !== null) {
        let cart = localStorage.getItem('cart');
        cart.push(service);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart = [];
        cart.push(service);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    selectedDiv.classList.toggle("selectedItem");
  }

  async function handleFavorite(e) {
    e.preventDefault();
    if (!isFavorite) {
      await api.post(`/users/favorite/${company.id}`);
      setIsFavorite(true);
    } else {
      await api.post(`/users/removeFavorite/${company.id}`);
      setIsFavorite(false);
    }
  }

  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-page-sidebar">
        <div className="box-color-area" />
        <div className="content-preview">
          <div className="buttons-actions">
            <div className="actions">
              <FavoriteButton favorite={isFavorite} onClick={handleFavorite} />
              <div className="report button-design" role="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                <button>Denunciar</button>
              </div>
            </div>
          </div>
          <div className="box-main-information">
            <div className="img-area">
              <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
            </div>
            <div className="title-joinedDate">
              {isLoading ? (<Loading />) : (
                <>
                  <h1>{company.companyName}</h1>
                  <div className="evaluation-paws-preview">
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <span>{company.rate === 5 ? ("5.0") : (company.rate)}</span>
                  </div>
                </>
              )}
            </div>
            <div className="transion-small" />
            <div className="address-status">
              <div className="address-area">
                <h3>Endereço</h3>
                {isLoading ? (<Loading boxShadow="none" />) : (company.address ? (<AddressInfo key={company.address.id} text={company.address.street + ', ' + company.address.placeNumber + ' - ' + (company.address.complement ? (company.address.complement + ' ') : ('')) + company.address.neighborhood + ', ' + company.address.city + ' - ' + company.address.cep} />) : (<AddressInfo text="Esta empresa não possui nenhum endereço." />))}
              </div>
              <div className="status-area">
                <h3>Horário</h3>
                {isLoading ? (<Loading boxShadow="none" />) : (<StatusInfo text={company.status} />)}
              </div>
            </div>
            <div className="description-area-company-profile">
              <div className="content-description-company-profile">
                <div className="title-description-company">
                  <h3>Descrição</h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-company">
          <div className="products-area">
            <div className="title-area">
              <h3>Serviços</h3>
            </div>
            <div className="transion-small" />
            {isLoadingServices ? (<Loading />) : (
              <>
                <div className="grid-services">
                  {services.map(service => <ServiceCardToUser key={service.id} service={service} onClick={event => selectItem(event, service)} />)}
                </div>
                <BottomLoadMore setClassName="btn-loadServices" text="Carregar mais produtos" onClick={() => handleLoadMoreServices(servicesActPage + 1)} />
              </>
            )}
            <div className="title-area">
              <h3>Produtos</h3>
            </div>
            <div className="transion-small" />
            {isLoadingProducts ? (<Loading />) : (
              <>
                <div className="grid-products">
                  {products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
                <BottomLoadMore setClassName="btn-loadProducts" text="Carregar mais produtos" onClick={() => handleLoadMoreProducts(productsActPage + 1)} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
