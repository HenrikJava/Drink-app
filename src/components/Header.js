import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styling/Header.css';

const Header = () => {
    return <div className='navBar'>
    <NavLink to='/' activeClassName="activeClass" exact={true}>Home</NavLink>
    <NavLink to='/explorer' activeClassName="activeClass" >Explorer</NavLink>
    </div>
}
export default Header