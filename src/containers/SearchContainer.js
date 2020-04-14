import React, { Component } from 'react';
import RestaurantsListContainer from '../containers/RestaurantsListContainer'
import SearchBar from '../components/SearchBar'
import * as requests from './requests'

export default class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      searchDatas: []
    }
  }
  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }
  //TODO: fetch searched item.
  handleSubmit = (event) => {
    event.preventDefault()

    requests.searchRestaurants(this.state.search).then(searchDatas => this.setState({ searchDatas }))
  }
  render() {
    return (
      <div className='searchContainer'>
        <h2>SearchContainer</h2>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <RestaurantsListContainer search={this.state.search} searchDatas={this.state.searchDatas} />
      </div>
    );
  }
}
