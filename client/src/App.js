import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import Creator from './components/Creator';
import Details from './components/Details';

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
