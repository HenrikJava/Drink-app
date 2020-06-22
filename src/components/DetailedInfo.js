import React from 'react'

const DetailedInfo = (drink) => {
    return <div><p>{drink.drink.name}</p>
<img src={drink.drink.image} alt={drink.drink.name}/></div>
}
export default DetailedInfo