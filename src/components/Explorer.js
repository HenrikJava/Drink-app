import React from 'react'
import { useState } from 'react';
import Drinks from "../data/drinks.json";
import DisplayingHits from './DisplayingHits'


const Explorer = () => {
    const [input, setInput] = useState('')
    const [searchHits, setSearchHits] = useState([2,2,23])

    const searchDrink = () => {
        Drinks.cocktails.map((drink) => {
            if (drink.name===input)
            {
                console.log('match')

            }
            return ''
        })

    }
    return <div>
    <h1>Find your favourite drink</h1>
    
    <input value={input} onChange={e => setInput(e.target.value)}/>
    <button onClick={searchDrink}>Search</button>
    <DisplayingHits results={searchHits}/>
    
    </div>
}
export default Explorer