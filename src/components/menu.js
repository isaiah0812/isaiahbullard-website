import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './menuItem';
import { routes } from '../constants/routing';

const navbarStyle = {
  backgroundColor: 'black',
  boxShadow: '0px 5px 20px #000000',
}

const navBrandStyle = {
  color: 'white',
  fontSize: '175%',
}

export default () => {
  return (
    <Navbar expand='lg' style={navbarStyle} sticky='top'>
      <Navbar.Brand href='/' style={navBrandStyle}>Isaiah Bullard</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'><FontAwesomeIcon icon={faBars} style={{color: 'white'}}/></Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          {routes.map((route) => {
            return (
              <Nav.Link href={route.path}>
                <MenuItem name={route.name} />
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}