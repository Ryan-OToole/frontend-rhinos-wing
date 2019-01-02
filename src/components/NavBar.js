import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">About</Link>
        </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar.Header>
          <Navbar.Collapse>
      <Nav>
        <NavItem>
          <Link to="/rhinos">Rhinos</Link>
        </NavItem>
        <NavItem>
          <Link to="/wings">Wings</Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/register">Register</Link>
        </NavItem>
      </Nav>
          </Navbar.Collapse>
    </Navbar>
);
}

export default NavBar;
