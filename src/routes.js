import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './Components/PrivateRoute';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

import Main from './Pages/Main';
import CompanyProfile from './Pages/CompanyProfile';
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import OrderContent from './Pages/OrderContent';
import Evaluation from './Pages/Evaluation';
import SearchResult from './Pages/SearchResult';

import WrongURL from './Pages/WrongURL';
import NotOrErrorLoading from './Pages/NotOrErrorLoading';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/entrar' component={LogIn} />
      <Route path='/cadastrar' component={SignUp} />

      <Route exact path='/' component={Main} />
      <Route exact path='/pet-shops/:id' component={CompanyProfile} />
      <Route exact path='/lista-resultados/:search' component={SearchResult} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PrivateRoute exact path='/favoritos' component={Favorites} />
      <PrivateRoute exact path='/sacola' component={Cart} />
      <PrivateRoute exact path='/pedidos' component={Orders} />
      <PrivateRoute exact path='/pedidos/:id' component={OrderContent} />
      <PrivateRoute exact path='/avaliacao/:id' component={Evaluation} />

      <Route path='/erro-no-carregamento' component={NotOrErrorLoading} />
      <Route path='*' component={WrongURL} />
    </Switch>
  </BrowserRouter>
);

export default Routes;