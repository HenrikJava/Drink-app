import React from 'react'
import DrinkCard from './DrinkCard'

const DisplayingHits = ({results}) =>  { return (
results.map((drink) => {
    return (<DrinkCard/>)
})
)}
export default DisplayingHits
