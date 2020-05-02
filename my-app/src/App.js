import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Naverino from './Naverino';
import Shop from "./Shop";
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Naverino />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;