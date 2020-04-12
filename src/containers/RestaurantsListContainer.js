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
    requests.fetchRestaurants().then(restaurants => this.setState({ restaurants }))
  }
  renderRestaurants = () => {
    return this.state.restaurants.map((restaurant, index) => {
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
