import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (isAuthenticated) ? 
  <Link onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Link> 
  : 
  <Link onClick={() => loginWithRedirect()}>Login</Link>;
};

export default withRouter(LoginButton);