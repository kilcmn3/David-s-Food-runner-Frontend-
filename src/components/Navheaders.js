import React from 'react';
import SearchBar from './SearchBar'

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
      <div className="search-bar">
        <SearchBar />
      </div>
    </nav>
  )
}


export default Navheaders
