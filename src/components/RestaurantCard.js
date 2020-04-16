import React from 'react';

const RestaurantCard = (props) => {
  let { name, phone, location } = props.restaurant
  location = JSON.parse(location)
  let address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code

  return (
    <div className="restaurant card" onClick={(event) => props.handleClick(props.restaurant)} >
      <ul>
        <li>Restaurant Name: {name}</li>
        <li>address: {address}</li>
        <li>phone: {phone}</li>
      </ul>
    </div >
  )
}

export default RestaurantCard