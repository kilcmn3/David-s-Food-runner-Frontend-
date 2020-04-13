import React from 'react';

const RestaurantCard = (props) => {
  const { index, name, phone, location } = props.restaurant
  const address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code


  return (
    <div className="restaurant card" key={index} onClick >
      <ul>
        Restaurant Name: {name}
        <li>address: {address}</li>
        <li>phone: {phone}</li>
      </ul>
    </div>
  );

}
export default RestaurantCard