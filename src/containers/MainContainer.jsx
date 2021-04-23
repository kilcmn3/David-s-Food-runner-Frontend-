import React, { Component } from 'react';
import { RestaurantsListContainer, Navbars } from '../exportComponents';
import * as requests from './requests';

import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      restaurants: [],
      restaurant: null,
    };
  }

  componentDidMount() {
    requests
      .searchRestaurants('pizza')
      .then((response) => response.json())
      .then((restaurants) => this.setState({ restaurants }));
  }

  handleClick = (restaurant) => {
    this.setState(
      { restaurantId: restaurant.id },
      this.props.history.push({ pathname: `/restaurants/${restaurant.id}` })
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    requests
      .searchRestaurants(this.state.search)
      .then((response) => response.json())
      .then((restaurants) => this.setState({ restaurants }));
  };

  handleChange = (value) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div className='MainContainer'>
        <Navbars
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <RestaurantsListContainer
          handleClick={this.props.handleClick}
          restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default withRouter(MainContainer);
