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
  componentDidMount() {
    if (this.props.searchDatas.length === 0) {
      requests.fetchRestaurants().then(restaurants => this.setState({ restaurants }))
    }
  }

  renderRestaurants = () => {
    const { searchDatas } = this.props
    const { startIndex, restaurants } = this.state
    let copyDatas

    if (!searchDatas || searchDatas.length === 0) {
      copyDatas = restaurants
    } else if (searchDatas.length >= 1) {
      copyDatas = searchDatas
    }

    let slicedDatas = copyDatas.slice(startIndex, startIndex + 5)
    return slicedDatas.map((restaurant, index) => {
      return <RestaurantCard key={index} restaurant={restaurant} />
    })
  }

  render() {
    return (
      <div className="restaurant list container" >
        <h3>RestaurantsListContainer</h3>

        {this.renderRestaurants()}
      </div >
    );
  }
}
