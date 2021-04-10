import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import * as requests from './requests'
import Pagination from "react-js-pagination";

export default class RestaurantsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      startIndex: 0,
      activePage: 0
    }
  }
  componentDidMount() {
    if (this.props.searchDatas.length === 0) {
      requests.searchRestaurants("pizza")
        .then(response => response.json())
        .then(restaurants => this.setState({ restaurants }))
    }

  }

  renderRestaurants = () => {
    const { searchDatas } = this.props
    const { startIndex, restaurants } = this.state
    let copyDatas = searchDatas.length === 0 ? restaurants : searchDatas
    let slicedDatas = copyDatas.slice(startIndex, startIndex + 5)

    return slicedDatas.map(restaurant => {
      return <RestaurantCard key={restaurant.id} restaurant={restaurant} handleClick={this.props.handleClick} />
    })
  }

  handlePageChange = (pageNumber) => {
    let startIndex
    if (pageNumber > this.state.activePage) {
      startIndex = this.state.startIndex + (pageNumber * 5)
    } else if (pageNumber === 1) {
      startIndex = 0
    } else {
      startIndex = this.state.startIndex - 5
    }
    this.setState({ activePage: pageNumber, startIndex });
  }

  render() {
    if (this.state.restaurants.length > 0) {
      return (
        <div className="restaurant list container" >

          { this.renderRestaurants()}
          < Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={this.state.restaurants.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />

        </div >
      )
    } else {
      return <div></div>
    }

  }
}
