import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import RestaurantContainer from '../containers/RestaurantContainer'

const RestaurantCard = (props) => {
  const [toRedirect, setToRedirect] = useState(false)
  const { index, name, phone, location } = props.restaurant
  const address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code

  const handleClick = () => {
    setToRedirect(!toRedirect)
  }
  const renderRedirect = () => {
    if (toRedirect) {
      return <Redirect to="/restaurant" />
    }
  }
  return (
    <div className="restaurant card" key={index} onClick={handleClick} >
      {renderRedirect()}
      <ul>
        Restaurant Name: {name}
        <li>address: {address}</li>
        <li>phone: {phone}</li>
      </ul>
    </div>
  );

}
export default RestaurantCard