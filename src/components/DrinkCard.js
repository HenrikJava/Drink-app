import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const DrinkCard = ({name, image, onHandleClick}) => 
<div onClick={onHandleClick} >
<NavLink to='/drink' activeClassName="activeClass" >
<p>{name}</p>
<img src={image} alt={name}/>
</NavLink>
</div>
export default DrinkCard