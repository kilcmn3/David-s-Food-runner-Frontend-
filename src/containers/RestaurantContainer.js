import React from 'react';
import ReviewContainer from './ReviewContainer'

const RestaurantContainer = (props) => {
  const { photos } = props.location.state.restaurant

  return (<div className="restaurant container">
    <img src={photos} alt="" />
    <ReviewContainer restaurant={props.location.state.restaurant} />
  </div>
  )
}

export default RestaurantContainer