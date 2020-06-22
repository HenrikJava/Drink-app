import React from 'react'
import { useState } from 'react';
import Drinks from "../data/drinks.json";
import DisplayingHits from './DisplayingHits'


const Explorer = ({ onHandleClick }) => {
    const [input, setInput] = useState('')
    const [searchHits, setSearchHits] = useState([Drinks.cocktails[2]])

    const searchDrink = () => {

        Drinks.cocktails.map((drink, index) => {

            if (drink.name.includes(input)) {
                setSearchHits(hits => hits.concat(drink))

            }
            else {

            }
            return ''


        })
    }

    return <div>
        <h1>Find your favourite drink</h1>

        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={searchDrink}>Search</button>
        <DisplayingHits results={searchHits} onHandleClick={onHandleClick} />

    </div>
}
export default Explorer