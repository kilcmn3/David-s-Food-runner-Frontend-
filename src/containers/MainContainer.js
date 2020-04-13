import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'
import * as requests from './requests'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }
  componentDidMount() {
    requests.fetchRestaurants().then(restaurants => this.setState({ restaurants }))
  }
  render() {
    return (
      <div className='MainContainer'>
        <h3>MainContainer</h3>
        <SearchContainer restaurants={this.state.restaurants} />
      </div>
    );
  }
}
