import React from 'react'
import { useState } from 'react';
import Drinks from "../data/drinks.json";
import DisplayingHits from './DisplayingHits'
import '../styling/Explorer.css';



const Explorer = ({ onHandleClick }) => {
    const [input, setInput] = useState('')
    const [searchHits, setSearchHits] = useState([])
    const [noHitsText, setNoHitsText] = useState([])
    const [mainTextToUser, setMainTextToUser] = useState('Find your favourite drink!')
    const searchDrink = () => {
        setNoHitsText('')
        let drinkFound = false
        Drinks.cocktails.map((drink) => {
            
            if (drink.name.includes(input)) {
                setSearchHits(hits => hits.concat(drink))
                drinkFound = true
                setMainTextToUser('Click on the drink for more info!')
            }
            else {

            }
            return ''


        })
        !drinkFound && setNoHitsText(<h2>Sorry, we could not find any drink, please try again!</h2>)
    }

    return <div className='explorerCard'>
        <h1>{mainTextToUser}</h1>

        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={searchDrink}>Search</button>
        {noHitsText}
        <div className='gridOfDrinks'>
        <DisplayingHits  results={searchHits} onHandleClick={onHandleClick} />
        </div>
    </div>
}
export default Explorer