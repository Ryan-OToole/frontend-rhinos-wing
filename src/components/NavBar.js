import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <header className="nav">
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>
        <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
        <NavLink activeClassName="selected" exact to="/search">SearchBar</NavLink>
      </header>

    </div>

  )
}



export default NavBar;
