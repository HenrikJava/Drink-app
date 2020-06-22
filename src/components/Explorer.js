import React from 'react'
import { useState } from 'react';
import Drinks from "../data/drinks.json";
import DisplayingHits from './DisplayingHits'


const Explorer = ({onHandleClick}) => {
    const [input, setInput] = useState('')
    const [searchHits, setSearchHits] = useState([Drinks.cocktails[1],Drinks.cocktails[2],Drinks.cocktails[3]])

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
    <DisplayingHits results={searchHits} onHandleClick={onHandleClick}/>
    
    </div>
}
export default Explorer