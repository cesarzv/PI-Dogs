import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import Creator from './components/Creator';
import Details from './components/Details';
// require('dotenv').config();
import axios from 'axios';
axios.defaults.baseURL = 'https://pi-dogs-production-2b15.up.railway.app/';
console.log(process.env);

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <div>
          <Home />
        </div>
      </Route>
      <Route path="/creator">
        <Creator />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </div>
  );
}

export default App;
