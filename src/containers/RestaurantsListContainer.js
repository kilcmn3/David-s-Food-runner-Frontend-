import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';


export default class RestaurantsListContainer extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map((restaurant, index) => {
      return <RestaurantCard key={index} restaurant={restaurant} />
    })
  }
  render() {
    return (
      <div className="restaurant list container">
        <h3>RestaurantsListContainer</h3>
        {this.renderRestaurants()}
      </div>
    );
  }
}
