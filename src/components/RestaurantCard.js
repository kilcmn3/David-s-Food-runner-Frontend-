import React from 'react';

const RestaurantCard = (props) => {
  const { index, name, address, contact, email } = props.restaurant

  return (
    <div className="restaurant card" key={index}>
      <ul>
        Restaurant Name: {name}
        <li>address: {address}</li>
        <li>contact: {contact}</li>
        <li>emailL: {email}</li>
      </ul>
    </div>
  );

}
export default RestaurantCard