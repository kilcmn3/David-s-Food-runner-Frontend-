import React from 'react';
import ReviewCard from '../components/ReviewCard'

const ReviewListContainer = (props) => {

  const renderComment = () => {
    if (props.comments.length > 0) {
      return props.comments.map((comment, index) => {
        return <ReviewCard key={index} comment={comment} handleClick={props.handleClick} />
      })
    }
  }

  return (
    <div className="ReviewListContainer">
      {renderComment()}
    </div>
  )
}


export default ReviewListContainer