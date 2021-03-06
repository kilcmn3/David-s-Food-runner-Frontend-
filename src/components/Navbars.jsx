import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import * as requests from '../containers/requests';
import { SearchBar } from '../exportComponents';

const Navbars = (props) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    requests
      .searchRestaurants(search)
      .then((response) => response.json())
      .then((restaurants) => {
        // props.updateListOfRestaurants([]);
        props.updateListOfRestaurants(restaurants);
        return props.history.push('/home');
      });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/home'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/profile'>Profile</Nav.Link>
          <Nav.Link href='/logout'>Logout</Nav.Link>
        </Nav>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navbars);
