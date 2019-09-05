import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import DropDownCart from '../../Components/DropDownCart';
import EmptyContent from '../../Components/EmptyContent';
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
import { isAuthenticated } from '../../Services/auth';

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

  // // STATE FOR THE CARD OF SERVICES
  // const [cart, setCart] = useState([]);
  // // EVERYTIME CART IS CHANGED IT WILL BE SETTED ON LOCALSTORAGE
  // useEffect(() => {
  //   localStorage.setItem('cartStore', JSON.stringify(cart));
  // }, [cart]);

  function handleTest() {
    let cart = JSON.parse(localStorage.getItem('cartStore'))
    console.log("Testandoo")
    console.log(cart)
  }

  function selectItem(event, service) {
    // isSelected
    let selectedDiv = event.currentTarget;

    let cart = JSON.parse(localStorage.getItem('cartStore'))
    
    if (cart !== null) {
      let cartWithInfos = [...cart];
      if (!cartWithInfos.includes(service.id)) {
        cartWithInfos.push(service);
        localStorage.setItem('cartStore', JSON.stringify(cartWithInfos));
      } else {
        cartWithInfos.filter(item => item !== service)
        localStorage.setItem('cartStore', JSON.stringify(cartWithInfos));
      }
    } else {
      console.log("entrou2")
      let cartArray = [];
      cartArray.push(service);
      localStorage.setItem('cartStore', JSON.stringify(cartArray));
    }
    selectedDiv.classList.toggle("selectedItem");
  }

  async function handleFavorite(e) {
    e.preventDefault();
    if (isAuthenticated()) {
      if (!isFavorite) {
        await api.post(`/users/favorite/${company.id}`);
        setIsFavorite(true);
      } else {
        await api.post(`/users/removeFavorite/${company.id}`);
        setIsFavorite(false);
      }
    } else {
      props.history.push('/entrar')
    }
  }

  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-company-profile">
        <div className="content-company-profile">
          <div className="box-color-area" />
          <div className="content-preview">
            <div className="buttons-actions">
              <div className="actions">
                <FavoriteButton favorite={isFavorite} onClick={handleFavorite} />
                <div className="report button-design" role="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                  <button onClick={handleTest} >Denunciar</button>
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
              {company.description ? (
                <>
                  <div className="description-area-company-profile">
                    <div className="content-description-company-profile">
                      <div className="title-description-company">
                        <h3>Descrição</h3>
                      </div>
                      <p>{company.description}</p>
                    </div>
                  </div>
                </>
              ) : ('')}
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
                  {services.length > 0 ? (
                    <div className="grid-services">
                      {services.map(service => <ServiceCardToUser key={service.id} service={service} onClick={event => selectItem(event, service)} />)}
                    </div>
                  ) : (<EmptyContent title="Lista de serviços" description="A empresa não possui nenhum serviço." svg={<svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#dddddd" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>} />)}
                  <BottomLoadMore setClassName="btn-loadServices" text="Carregar mais produtos" onClick={() => handleLoadMoreServices(servicesActPage + 1)} />
                </>
              )}
              <div className="title-area">
                <h3>Produtos</h3>
              </div>
              <div className="transion-small" />
              {isLoadingProducts ? (<Loading />) : (
                <>
                  {products.length > 0 ? (
                    <div className="grid-products">
                      {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                  ) : (<EmptyContent title="Lista de produtos" description="A empresa não possui nenhum produto." svg={<svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#dddddd" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>} />)}
                  <BottomLoadMore setClassName="btn-loadProducts" text="Carregar mais produtos" onClick={() => handleLoadMoreProducts(productsActPage + 1)} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
