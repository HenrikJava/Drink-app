import React from 'react'
import { useState } from 'react';
import Drinks from "../data/drinks.json";
import DisplayingHits from './DisplayingHits'


const Explorer = ({ onHandleClick }) => {
    const [input, setInput] = useState('')
    const [searchHits, setSearchHits] = useState([])
    const [noHitsText, setNoHitsText] = useState([])
    const searchDrink = () => {
        setNoHitsText('')
        let drinkFound = false
        Drinks.cocktails.map((drink) => {
            
            if (drink.name.includes(input)) {
                setSearchHits(hits => hits.concat(drink))
                drinkFound = true
            }
            else {

            }
            return ''


        })
        !drinkFound && setNoHitsText(<h2>Tyvärr hittades ingen drink, vänligen försök igen</h2>)
    }

    return <div>
        <h1>Find your favourite drink</h1>

        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={searchDrink}>Search</button>
        {noHitsText}
        <DisplayingHits results={searchHits} onHandleClick={onHandleClick} />

    </div>
}
export default Explorer