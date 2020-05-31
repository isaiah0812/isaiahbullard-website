import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navbarStyle = {
  backgroundColor: 'black',
  height: '10%'
}

const navItemStyle = {
  color: 'white'
}

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar expand='lg' style={navbarStyle}>
        <Navbar.Brand href='/' style={navItemStyle}>Isaiah Bullard</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'><FontAwesomeIcon icon={faBars} style={{color: 'white'}}/></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav' style={{color: 'white'}}>
          <Nav className='m-auto'>
            <Nav.Link href='/projects' style={navItemStyle}>Projects</Nav.Link>
            <Nav.Link href='/beats' style={navItemStyle}>Beats</Nav.Link>
            <Nav.Link href='/merch' style={navItemStyle}>Merchandise</Nav.Link>
            <Nav.Link href='/contact' style={navItemStyle}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}