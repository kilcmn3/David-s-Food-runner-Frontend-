import React from 'react';
import ReviewContainer from './ReviewContainer'

const RestaurantContainer = (props) => {
  const { photos, name, location, categories, phone } = props.location.state.restaurant
  let parselocation = JSON.parse(location)
  const address = parselocation.address1 + ", " + parselocation.city + ' ' + parselocation.state + " " + parselocation.zip_code

  return (<div className="restaurant container">
    <div className="restaaurant info">
      <img src={photos} alt="" />
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>category: {categories[0]}</p>

    </div>
    <ReviewContainer restaurant={props.location.state.restaurant} />
  </div>
  )
}

export default RestaurantContainer