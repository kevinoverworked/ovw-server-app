import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import "./styles/base.styles.scss";
import { Header, Login, Dashboard, Editor, LoginButton } from "./components";
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  /*const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    console.log("app.js token");
    console.log(token);
    if (!token) {
      console.log("token not in app.js");
      return;
    }
 
    axios.get(`http://localhost:5000/verifyToken${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      console.log(error);
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <main>Checking Authentication...</main>
  }*/


  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <PublicRoute path="/" exact component={() => <LoginButton />} /> 
            <Route path="/dashboard" exact component={() => <Dashboard />} /> 
            <PrivateRoute path="/editor" exact component={() => <Editor />} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;