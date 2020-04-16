import React, { Component } from 'react';
import { ReviewContainer, NavBar } from '../exportComponents'
import * as requests from './requests'

const initState = {
  comment: "",
  comments: [],
  restaurant: null,
  user: null
}

class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      comments: [],
      restaurant: null,
      user: null
    }
  }

  componentDidMount() {
    let url = window.location.href.split("/")
    requests.fetchOneRest(url[url.length - 1])
      .then(response => response.json())
      .then(restaurant => {
        this.setState({ comments: restaurant.comments, restaurant: restaurant })
      })
    requests.fetchUserById(localStorage.getItem("userid"))
      .then(response => response.json())
      .then(user => this.setState({ user }))
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
      user_id: localStorage.getItem('userid'),
      restaurant_id: this.state.restaurant.id,
      user_email: this.state.user.email
    }
    requests.postComments(datas)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ comments: [...this.state.comments, data], comment: "" })
      })
  }

  handleDelete = (event) => {
    let id = event.target.parentElement.id
    let target = this.state.comments.map(comment => comment.id).indexOf(event.target.id)
    let newArr = this.state.comments
    newArr.splice(target, 1)
    this.setState({ comments: newArr })

    requests.deleteComment(id)
  }

  handleComment = (event) => {
    this.setState({ comment: event.target.value })
  }

  render() {
    return (
      <div className="restaurant container">
        <NavBar />
        {this.renderRestaurant()}
        <ReviewContainer comment={this.state.comment} comments={this.state.comments} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default RestaurantContainer