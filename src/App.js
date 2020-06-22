import React from 'react';
import {useState} from 'react'
import './App.css';
import Drinks from "./data/drinks.json";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Explorer from './components/Explorer'
import Home from './components/Home'
import Default from './components/Default'
import Header from './components/Header'
import DetailedInfo from './components/DetailedInfo'

function App() {
  const [drink,setDrink] = useState(Drinks.cocktails[2])
  const detailedInfo = () => {
    console.log("hejhej")
  }
  return (
    <BrowserRouter>
  <div>
  <Header/>
  <Switch>
  <Route path='/' component={Home} exact={true} />
  <Route path='/explorer' component={() => <Explorer onHandleClick={(e) => detailedInfo(e.target)}/>} />
  <Route path='/drink' component={() => <DetailedInfo drink={drink}/>}/>

  <Route component={Default}/>
  </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
