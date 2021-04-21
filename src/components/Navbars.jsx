import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SearchBar } from '../exportComponents';

const Navbars = (props) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='Home'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;

// <nav className='Navbars Navbars-expand-lg Navbars-light bg-light'>
//   <a className='Navbars-brand' href='/MainContainer'>
//     Home
//   </a>
//   <div className='collapse Navbars-collapse' id='NavbarsSupportedContent'>
//     <ul className='Navbars-nav mr-auto'>
//       <li className='nav-item active'>
//         <a className='nav-link' href='/profile'>
//           Edit Profile <span className='sr-only'>(current)</span>
//         </a>
//       </li>
//       <li className='nav-item'>
//         <a className='nav-link' href='/logout'>
//           Log out
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div className='search-bar'>
//     <SearchBar />
//   </div>
// </nav>
