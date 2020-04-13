import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'

export default class MainContainer extends Component {

  render() {
    return (
      <div className='MainContainer'>
        <h3>MainContainer</h3>
        <SearchContainer />
      </div>
    );
  }
}
