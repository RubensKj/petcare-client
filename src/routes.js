import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import CompanyProfile from './Pages/CompanyProfile';
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/companies/:id' component={CompanyProfile} />
      <Route path='/profile' component={Profile} />
      <Route path='/favoritos' component={Favorites} />
    </Switch>
  </BrowserRouter>
);

export default Routes;