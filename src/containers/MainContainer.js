import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SearchContainer, NavBar, RestaurantContainer } from '../exportComponents'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restContToggle: false,
    }
  }

  handleClick = (restaurantId) => {
    localStorage.setItem("restaurantId", restaurantId)
    this.setState({ restContToggle: !this.state.restContToggle }, this.props.history.push(`/restaurants/${restaurantId}`))
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
