import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return <div>
    <NavLink to='/' activeClassName="activeClass" exact={true}>Home</NavLink>
    <NavLink to='/explorer' activeClassName="activeClass" >Explorer</NavLink>
    </div>
}
export default Header