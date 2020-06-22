import React from 'react'
import DrinkCard from './DrinkCard'

const DisplayingHits = ({results, onHandleClick}) =>  { 
    return (
results.map((drink) => {
    return (<DrinkCard name={drink.name} key={drink.name} image={drink.image} onHandleClick={onHandleClick}/>)
})
)}
export default DisplayingHits
