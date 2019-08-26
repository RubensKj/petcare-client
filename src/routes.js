import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import CompanyProfile from './Pages/CompanyProfile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/companies/:id' component={CompanyProfile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;