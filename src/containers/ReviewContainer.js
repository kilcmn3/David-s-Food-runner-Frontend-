import React, { Component } from 'react';
import { ReviewListContainer, ReviewForm } from '../exportComponents'

export default class ReviewContainer extends Component {
  render() {
    return <div className="review container">
      <ReviewForm />
      <ReviewListContainer />
    </div>;
  }
}
