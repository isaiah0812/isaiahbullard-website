import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import IBIcon from '../assets/IBLogo_Icon.png';

import routes from '../constants/routing.json';
import { black } from '../constants/colors';

import MenuItem from './menuItem';

/**
 * Style object for the navbar
 * @constant
 * @name navbarStyle
 * @type {object}
 */
const navbarStyle = {
  backgroundColor: 'black',
  boxShadow: `0px 5px 10px ${black}`,
}

/**
 * Style object for the navbar brand
 * @constant
 * @name navBrandStyle
 * @type {object}
 */
const navBrandStyle = {
  color: 'white',
  fontSize: '175%',
}

/**
 * The Footer container with all social media links
 * @name Footer
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Menu />
 */
export default class Menu extends React.Component {
  render() {
    return (
      <Navbar expand='lg' style={navbarStyle} sticky='top'>
        <Navbar.Brand href='/' style={navBrandStyle}><img src={IBIcon} alt="Isaiah Bullard" style={{width: '2em', height: '2em'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'><FontAwesomeIcon icon={faBars} style={{color: 'white'}}/></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            {routes.map((route) => {
              return (
                <Nav.Link key={route.key} href={route.path}>
                  <MenuItem name={route.name} />
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}