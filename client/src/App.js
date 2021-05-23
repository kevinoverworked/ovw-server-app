import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Login, Dashboard } from "./components";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navigation />
          </header>
          <div className="content">
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/dashboard" exact component={() => <Dashboard />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;