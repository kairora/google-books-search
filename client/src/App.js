import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./components/pages/Search"
import Saved from "./components/pages/Saved"
import Nav from "./components/header/Nav"
import Jumbotron from "./components/header/Jumbotron"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />   
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
