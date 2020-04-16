import React, { Component } from 'react';
import { ReviewContainer, NavBar } from '../exportComponents'
import * as requests from './requests'

class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      comments: [],
      restaurant: null
    }
  }

  componentDidMount() {
    let url = window.location.href.split("/")
    requests.fetchOneRest(url[url.length - 1])
      .then(response => response.json())
      .then(restaurant => {
        let comments = []
        if (restaurant.comments) {
          comments = restaurant.comments.map(target => target.comment)
        }
        this.setState({ comments, restaurant: restaurant })
      })
  }
  renderRestaurant = () => {
    if (this.state.restaurant) {
      const { photos, name, location, categories, phone } = this.state.restaurant
      let parseLocation = JSON.parse(location)
      let alias = JSON.parse(categories[0])["alias"]
      const address = parseLocation.address1 + ", " + parseLocation.city + ' ' + parseLocation.state + " " + parseLocation.zip_code

      return (
        <div className="restaurant info">
          <img src={photos[0]} alt="" />
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

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let datas = {
      comment: this.state.comment,
      user_id: localStorage.getItem('userId'),
      restaurant_id: this.state.restaurant.id
    }
    requests.postComments(datas)
      .then(response => response.json())
      .then((data) => {
        this.setState({ comments: [...this.state.comments, data.comment], comment: "" })
      })
  }

  handleClick = () => {
    //delete comment and database
    console.log("delete te post!")
  }

  render() {
    return (
      <div className="restaurant container">
        <NavBar />
        {this.renderRestaurant()}
        <ReviewContainer comments={this.state.comments} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default RestaurantContainer