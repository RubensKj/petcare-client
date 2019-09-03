import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

import Main from './Pages/Main';
import CompanyProfile from './Pages/CompanyProfile';
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';
import Cart from './Pages/Cart';
import Evaluation from './Pages/Evaluation';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/entrar' component={LogIn} />
      <Route path='/cadastrar' component={SignUp} />

      <Route exact path='/' component={Main} />
      <Route path='/companies/:id' component={CompanyProfile} />
      <Route path='/profile' component={Profile} />
      <Route path='/favoritos' component={Favorites} />
      <Route path='/sacola' component={Cart} />
      <Route path='/avaliacao' component={Evaluation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;