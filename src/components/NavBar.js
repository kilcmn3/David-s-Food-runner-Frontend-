import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className="nav bar">
      <nav>
        <ul>
          <li><Link to={'/MainContainer'} className="nav-link">Home</Link></li>
          <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>
          <li><Link to={'/logout'} className="nav-link">Log Out</Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default NavBar
