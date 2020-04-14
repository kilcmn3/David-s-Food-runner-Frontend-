import React from 'react';
import ReviewContainer from './ReviewContainer'

const RestaurantContainer = (props) => {
  const { photos } = props.location.state.restaurant

  return (<div className="restaurant container">
    <img src={photos} alt="" />
    <ReviewContainer />
  </div>
  )
}

export default RestaurantContainer