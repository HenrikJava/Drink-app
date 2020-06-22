import React from 'react'

const DetailedInfo = (drink) => {
    return <div><h2>{drink.drink.name}</h2>
    <p>{drink.drink.preparation}</p>
<img src={drink.drink.image} alt={drink.drink.name}/></div>
}
export default DetailedInfo