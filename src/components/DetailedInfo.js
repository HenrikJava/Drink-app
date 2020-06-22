import React from 'react'
import '../styling/DetailedInfo.css';


const DetailedInfo = (drink) => {
    return <div className='detailsAboutDrink'><h1>{drink.drink.name}</h1>
    <h3>Ingredienser</h3>
    <p>{drink.drink.preparation}</p>
<img src={drink.drink.image} alt={drink.drink.name}/></div>
}
export default DetailedInfo