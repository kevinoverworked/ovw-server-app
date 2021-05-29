import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import { Navigation, Home, About, Login, Dashboard, LoginButton } from "./components";
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:5000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }


  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <PublicRoute path="/about" exact component={() => <About />} />
            <PublicRoute path="/login" exact component={() => <Login />} />
            <PrivateRoute path="/dashboard" exact component={() => <Dashboard />} /> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;