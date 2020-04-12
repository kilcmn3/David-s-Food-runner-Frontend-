import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import * as requests from './requests'

export default class RestaurantsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }
  componentDidMount() {
    requests.fetchRestaurants().then(restaurants => console.log(restaurants))
  }
  render() {
    return (
      <div>
        <h3>RestaurantsListContainer</h3>
        <RestaurantCard />
      </div>
    );
  }
}
