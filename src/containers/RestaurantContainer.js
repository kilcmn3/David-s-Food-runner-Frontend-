import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'
import * as requests from './requests'

export default class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: [],
      stage: false
    }
  }

  //TODO fetch right direction
  componentDidMount() {
    let id = this.props.match.params.id
    requests.fetchOneRest(id).then(restaurant => this.setState({ restaurant, stage: !this.state.stage }))
  }
  renderRestaurant = () => {
    if (this.state.stage) {
      const { photos, name, location, categories, phone } = this.state.restaurant
      let parseLocation = JSON.parse(location)
      let alias = JSON.parse(categories[0])["alias"]
      const address = parseLocation.address1 + ", " + parseLocation.city + ' ' + parseLocation.state + " " + parseLocation.zip_code

      return (
        <div className="restaaurant info">
          <img src={photos} alt="" />
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>category: {alias}</p>
        </div>
      )
    } else {
      return null
    }

  }
  render() {
    return (<div className="restaurant container">
      {this.renderRestaurant()}
      <ReviewContainer restaurantID={this.props.match.params.id} />
    </div>
    )
  }
}
