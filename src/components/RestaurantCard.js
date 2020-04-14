import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class RestaurantCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  handleClick = () => {
    this.setState({ redirect: !this.state.redirect })
  }
  renderReviewContainer = () => {
    let id = this.props.restaurant.id

    if (this.state.redirect) {
      return (<Redirect to={{
        pathname: `/restaurants/${id}`
      }} />)
    } else {
      return null
    }
  }
  render() {
    const { index, name, phone, location } = this.props.restaurant
    let parselocation = JSON.parse(location)
    const address = parselocation.address1 + ", " + parselocation.city + ' ' + parselocation.state + " " + parselocation.zip_code
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
