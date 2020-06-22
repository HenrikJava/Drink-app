import React from 'react';
import { useState } from 'react'
import './styling/App.css';
import Drinks from "./data/drinks.json";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Explorer from './components/Explorer'
import Home from './components/Home'
import Default from './components/Default'
import Header from './components/Header'
import DetailedInfo from './components/DetailedInfo'

function App() {
  const [drink, setDrink] = useState()
  const findMoreDetailsAboutSelectedDrink = (drink) => {
    const currentDrinkName = drink.innerHTML
    Drinks.cocktails.map((drink, index) => {
      if (drink.name === currentDrinkName) {
        setDrink(Drinks.cocktails[index])

      }
      return ''
    })

  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/explorer' component={() => <Explorer onHandleClick={(e) => findMoreDetailsAboutSelectedDrink(e.target)} />} />
          <Route path='/drink' component={() => <DetailedInfo drink={drink} />} />
          <Route component={Default} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
