import React from 'react';
import ReviewCard from '../components/ReviewCard'

const ReviewListContainer = (props) => {

  const renderComment = () => {
    if (props.comments.length > 0) {
      return props.comments.map((data, index) => {
        return <ReviewCard key={index} datas={data} handleDelete={props.handleDelete} />
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