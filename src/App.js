import React from 'react';
import './App.css';
import Drinks from "./data/drinks.json";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Explorer from './components/Explorer'
import Home from './components/Home'
import Default from './components/Default'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
  <div>
  <Header/>
  <Switch>
  <Route path='/' component={Home} exact={true} />
  <Route path='/explorer' component={Explorer}/>
  <Route component={Default}/>
  </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
