import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import RestaurantCard from '../components/RestaurantCard';

export default class RestaurantsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      activePage: 0,
    };
  }

  renderRestaurants = () => {
    return this.props.restaurants.map((restaurant) => {
      return (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          handleClick={this.props.handleClick}
        />
      );
    });
  };

  handlePageChange = (pageNumber) => {
    let initialIndex;

    if (pageNumber > this.state.activePage) {
      initialIndex = this.state.startIndex + pageNumber * 5;
    } else if (pageNumber === 1) {
      initialIndex = 0;
    } else {
      initialIndex = this.state.initialIndex - 5;
    }
    this.setState({ activePage: pageNumber, initialIndex });
  };

  render() {
    return this.props.restaurants.length !== undefined ? (
      <div className='restaurant list container'>
        {this.renderRestaurants()}
        <Pagination
          itemClass='page-item'
          linkClass='page-link'
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.restaurants.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    ) : (
      <div></div>
    );
  }
}
