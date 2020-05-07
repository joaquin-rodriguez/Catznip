import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Naverino from './Naverino';
import Shop from "./Shop";
import Home from './Home';
import Signup from './Signup';
import Shop2 from './Shop2';
import Shop3 from './Shop3';
import WorkingAxios from './WorkingAxios';

function App() {
  return (
    <div className="App">
      <Router>
        <Naverino />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Shop2" component={Shop2} />
          <Route path="/Shop3" component={Shop3} />
          <Route path="/WorkingAxios" component={WorkingAxios} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;