import React, { Component } from 'react';
import * as requests from '../containers/requests'
export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    //post with user_id, and  restaurnat_id
    let datas = {
      comment: this.state.comment,
      user_id: 1,
      restaurant_id: this.props.restaurant.id
    }
    requests.postComments(datas).then(() => this.setState({ comment: "" }))
  }
  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }
  render() {
    return <div className="review form">
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placeholder="write your commnets here.." />
        <input type="submit" />
      </form>
    </div>;
  }
}
