import React, { Component } from 'react';

export default class RestaurantContainer extends Component {
  renderFrom = () => {
    return "rednering form"
  }
  render() {
    console.log(this.props.location.state.restaurant)
    const { photos } = this.props.location.state.restaurant

    return <div className="restaurant container">
      <img src={photos} alt="" />
    </div>;
  }
}
