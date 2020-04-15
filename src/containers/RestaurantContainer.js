import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'
import * as requests from './requests'

export default class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      comments: [],
      restaurant: {}
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    requests.fetchOneRest(id).then(restaurant => {
      let newComments = restaurant.comments.map(target => target.comment)
      this.setState({ comments: newComments, restaurant: restaurant })
    })
  }
  renderRestaurant = () => {
    if (this.state.restaurant.id) {
      const { photos, name, location, categories, phone } = this.state.restaurant
      let parseLocation = JSON.parse(location)
      let alias = JSON.parse(categories[0])["alias"]
      const address = parseLocation.address1 + ", " + parseLocation.city + ' ' + parseLocation.state + " " + parseLocation.zip_code

      return (
        <div className="restaurant info">
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

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let datas = {
      comment: this.state.comment,
      user_id: 1,
      restaurant_id: this.state.restaurant.id
    }
    requests.postComments(datas)
      .then(response => response.json())
      .then((data) => this.setState({ comments: [...this.state.comments, data], comment: "" }))
  }

  handleClick = () => {
    //delete comment and database
    console.log("delete te post!")
  }

  render() {
    // console.log(this.state.comments)
    return (<div className="restaurant container">
      {this.renderRestaurant()}
      <ReviewContainer comments={this.state.comments} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />
    </div>
    )
  }
}
