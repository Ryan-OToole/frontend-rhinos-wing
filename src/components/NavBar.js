import React from 'react'
import { Link } from 'react-router-dom';
import '../app.css';
import SearchBar from '../containers/search_bar'

const NavBar = (props) => {
  return (
  <div className="body">
    <header className="header">
      <div className="container">
        <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="logo" height="100" width="150"  />
        <nav className="nav">
          <SearchBar />
          <ul className="ul">

              <li className="li"><Link to="/">About</Link></li>
              <li className="li"><Link to="/rhinos">Rhinos</Link></li>
              <li className="li"><Link to="/wings">Wings</Link></li>
              <li className="li"><Link to="/login">Login</Link></li>
              <li className="li"><Link to="/register">Register</Link></li>

          </ul>
        </nav>
      </div>
    </header>

  </div>


  );
}

export default NavBar;
