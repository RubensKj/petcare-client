import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import CompanyProfile from './Pages/CompanyProfile';
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';
import Cart from './Pages/Cart';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/companies/:id' component={CompanyProfile} />
      <Route path='/profile' component={Profile} />
      <Route path='/favoritos' component={Favorites} />
      <Route path='/sacola' component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;