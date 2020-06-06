import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './menuItem';

const navbarStyle = {
  backgroundColor: 'black',
  height: '10%'
}

const navBrandStyle = {
  color: 'white',
  fontSize: '175%',
}

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar expand='lg' style={navbarStyle}>
        <Navbar.Brand href='/' style={navBrandStyle}>Isaiah Bullard</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'><FontAwesomeIcon icon={faBars} style={{color: 'white'}}/></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link href='/projects'>
              <MenuItem name='Projects' />
            </Nav.Link>
            <Nav.Link href='/beats'>
              <MenuItem name='Beats' />
            </Nav.Link>
            <Nav.Link href='/merch'>
              <MenuItem name='Merchandise' />
            </Nav.Link>
            <Nav.Link href='/contact'>
              <MenuItem name='Contact' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}