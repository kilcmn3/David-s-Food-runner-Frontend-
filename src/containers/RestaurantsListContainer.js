import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
export default class RestaurantsListContainer extends Component {
  render() {
    return (
      <div>
        <h3>RestaurantsListContainer</h3>
        <RestaurantCard />
      </div>
    );
  }
}
