import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SearchBar } from '../exportComponents';

const Navbars = (props) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/home'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/profile'>Profile</Nav.Link>
          <Nav.Link href='/logout'>Logout</Nav.Link>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
