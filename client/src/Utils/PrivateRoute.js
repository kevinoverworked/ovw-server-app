import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
 
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth0();
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;