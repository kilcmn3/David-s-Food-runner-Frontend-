import React from 'react';
import { Redirect } from 'react-router-dom'

const RestaurantCard = (props) => {

  const { id, name, phone, location } = props.restaurant
  // let parselocation = JSON.parse(location)
  const address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code
  return (
    <div className="restaurant card" onClick={(event) => props.handleClick(id)} >
      <ul>
        Restaurant Name: {name}
        <li>address: {address}</li>
        <li>phone: {phone}</li>
      </ul>
    </div>
  )
}

export default RestaurantCard