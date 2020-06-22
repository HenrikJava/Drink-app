import React from 'react'
import Image from "../data/drinkpicture.jpg";
import '../styling/Home.css';


const Home = () => {
    return <div className='homeCard'><h1>Welcome to the coctail explorer</h1>
    <img src={Image} alt='drinkpicture' />
    </div>
}
export default Home