import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class RestaurantCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null
    }
  }


  handleClick = () => {
    this.setState({ url: '/restaurant' })
  }
  renderReviewContainer = () => {
    console.log(this.state.url)
    if (this.state.url) {
      return (<Redirect to={{
        pathname: this.state.url,
        state: { restaurant: this.props.restaurant }
      }} />)
    } else {
      return null
    }
  }
  render() {
    const { index, name, phone, location } = this.props.restaurant
    const address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code
    return (
      <div className="restaurant card" key={index} onClick={this.handleClick} >
        {this.renderReviewContainer()}
        <ul>
          Restaurant Name: {name}
          <li>address: {address}</li>
          <li>phone: {phone}</li>
        </ul>
      </div>
    )
  }
}
