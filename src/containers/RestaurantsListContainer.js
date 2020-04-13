import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import * as requests from './requests'

export default class RestaurantsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      startIndex: 0
    }
  }
  handleScroll = (event) => {
    console.log(event.target)
    debugger
  }

  renderRestaurants = () => {
    const { searchDatas } = this.props

    if (!searchDatas || searchDatas.length === 0) {
      return null
    } else if (searchDatas.length >= 1) {
      let copyDatas = searchDatas.slice(this.state.startIndex, this.state.startIndex + 5)
      return copyDatas.map((restaurant, index) => {
        return <RestaurantCard key={index} restaurant={restaurant} />
      })
    }
  }

  render() {
    return (
      <div className="restaurant list container" onScroll={this.handleScroll} >
        <h3>RestaurantsListContainer</h3>

        {this.renderRestaurants()}
      </div >
    );
  }
}
