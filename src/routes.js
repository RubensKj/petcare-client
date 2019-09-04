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
import Evaluation from './Pages/Evaluation';

import WrongURL from './Pages/WrongURL';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/entrar' component={LogIn} />
      <Route path='/cadastrar' component={SignUp} />

      <Route exact path='/' component={Main} />
      <Route exact path='/companies/:id' component={CompanyProfile} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PrivateRoute exact path='/favoritos' component={Favorites} />
      <PrivateRoute exact path='/sacola' component={Cart} />
      <PrivateRoute exact path='/avaliacao' component={Evaluation} />

      <Route path='*' component={WrongURL} />
    </Switch>
  </BrowserRouter>
);

export default Routes;