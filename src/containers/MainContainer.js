import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'
import NavBar from '../components/NavBar'

export default class MainContainer extends Component {

  render() {
    return (
      <div className='MainContainer'>
        <NavBar />
        <SearchContainer />
      </div>
    );
  }
}
