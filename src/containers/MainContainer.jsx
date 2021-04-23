import React, { Component } from 'react';
import { RestaurantsListContainer, Navbars } from '../exportComponents';
import * as requests from './requests';

import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchDatas: [],
      restaurant: null,
    };
  }
  componentDidMount() {
    this.setState({ restContToggle: false });
  }

  handleClick = (restaurant) => {
    this.setState(
      { restaurantId: restaurant.id },
      this.props.history.push({ pathname: `/restaurants/${restaurant.id}` })
    );
  };

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
      <div className='MainContainer'>
        <Navbars />
        <RestaurantsListContainer
          search={this.state.search}
          searchDatas={this.state.searchDatas}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default withRouter(MainContainer);
