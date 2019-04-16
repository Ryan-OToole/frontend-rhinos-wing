import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css';
import SearchBar from '../containers/search_bar'
import Adapter from './Adapter'

class NavBar extends Component {

  handleClick = () => {
    localStorage.clear();
  }
  render() {
    return (

    <div className="body">
      <header className="header">
        <div className="container">
          <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="logo" height="100" width="150"  />
          <nav className="nav">
            <SearchBar />
            { Adapter.isLoggedIn() ?
              <ul className="ul">
                  <li  className="li"><Link to="/">Home</Link></li>
                  <li className="li"><Link to="/createStory">Create Story</Link></li>
                  <li className="li" onClick={this.handleClick}><Link to="/login">Logout</Link></li>
              </ul>
                :
              <ul className="ul">
                  <li  className="li"><Link to="/">Home</Link></li>
                  <li className="li"><Link to="/createStory">Create Story</Link></li>
                  <li className="li"><Link to="/login">Login</Link></li>
              </ul>
            }
          </nav>
        </div>
      </header>
    </div>
    );
  }

}

export default NavBar;
