import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';

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
    </div>
  );
}

export default App;
