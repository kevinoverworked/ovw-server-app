import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import "./styles/base.styles.scss";
import { Header, Dashboard, Editor, LoginButton } from "./components";
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={() => <Dashboard />} /> 
            <Route path="/editor" exact component={() => <Editor />} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;