import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Navheaders = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/MainContainer">Home</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/profile">Edit Profile <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Navheaders
