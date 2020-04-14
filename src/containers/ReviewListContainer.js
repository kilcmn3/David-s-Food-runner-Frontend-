import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard'
import * as requests from './requests'

export default class ReviewListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    const { id } = this.props.restaurant
    requests.fetchComments(id).then(comments => this.setState(comments))
  }
  renderComment = () => {
    if (this.state.comments.length > 0) {
      return this.state.comments.map((comment, index) => {
        return <ReviewCard key={index} comment={comment} handleClick={this.handleClick} />
      })
    } else {
      return null
    }
  }
  handleClick = () => {
    //delete comment and database
    console.log("delete te post!")
  }
  render() {
    return <div className="ReviewListContainer">
      {this.renderComment()}
    </div>;
  }
}
