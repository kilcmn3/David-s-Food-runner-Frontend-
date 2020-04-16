import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav bar">
        <nav>
          <ul>
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            {/* <li><Link to={'/serach'} className="nav-link">My Fav</Link></li> */}
            <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>
            {/* <li><Link ></Link></li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
