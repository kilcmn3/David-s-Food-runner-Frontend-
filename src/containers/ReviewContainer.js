import React from 'react';
import { ReviewListContainer, ReviewForm } from '../exportComponents'

const ReviewContainer = (props) => {

  return (
    <div className="review container">
      <ReviewForm restaurant={props.restaurant} />
      <ReviewListContainer />
    </div>
  )
}

export default ReviewContainer