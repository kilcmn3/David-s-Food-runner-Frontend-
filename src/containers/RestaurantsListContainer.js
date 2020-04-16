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
      requests.fetchRestaurants()
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

  render() {
    return (
      <div className="restaurant list container" >
        {this.renderRestaurants()}
      </div >
    );
  }
}
