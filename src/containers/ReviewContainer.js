import React from 'react';
import { ReviewListContainer, ReviewForm } from '../exportComponents'

const ReviewContainer = (props) => {

  return (
    <div className="review container">
      <ReviewForm restaurant={props.restaurant} handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
      <ReviewListContainer comments={props.comments} handleClick={props.handleClick} />
    </div>
  )
}

export default ReviewContainer