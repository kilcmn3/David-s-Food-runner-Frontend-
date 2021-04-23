import React, { Component } from 'react';
import RestaurantsListContainer from './RestaurantsListContainer';
import SearchBar from '../components/SearchBar';
import * as requests from './requests';

export default class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searchDatas: [],
    };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    requests
      .searchRestaurants(this.state.search)
      .then((response) => response.json())
      .then((searchDatas) => this.setState({ searchDatas, search: '' }));
  };
  render() {
    return (
      <div className='searchContainer'>
        {/* <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          search={this.state.search}
        /> */}
        <RestaurantsListContainer
          search={this.state.search}
          searchDatas={this.state.searchDatas}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}
