import React from 'react';

import { isAuthenticated } from "../../Services/auth";
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/entrar", state: { from: props.location } }} />
      )
    }
  />
);