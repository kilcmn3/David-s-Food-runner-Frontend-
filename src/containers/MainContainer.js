import React, { Component } from 'react';
import { SearchContainer, NavBar, RestaurantContainer } from '../exportComponents'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restContToggle: false,
    }
  }

  handleClick = (restaurant) => {
    localStorage.setItem("restaurantId", restaurant.Id)
    this.setState({ restContToggle: !this.state.restContToggle }, this.props.history.push(`/restaurants/${restaurant.id}`))
  }
  render() {
    return (
      <div className='MainContainer'>
        <NavBar />
        {!this.state.restContToggle ? <SearchContainer handleClick={this.handleClick} /> : null}
        {this.state.restContToggle ? <RestaurantContainer /> : null}
      </div>
    );
  }
}
