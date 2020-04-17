import React from 'react';

const RestaurantCard = (props) => {
  let { name, phone, location, photos } = props.restaurant
  location = JSON.parse(location)
  let address = location.address1 + ", " + location.city + ' ' + location.state + " " + location.zip_code

  return (
    <div onClick={(event) => props.handleClick(props.restaurant)} >
      < a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" >
        <div className="flex-column">
          {name}
          <p><small>{address}</small></p>
          <span className="badge badge-info badge-pill">{phone}</span>
        </div>
        <div className="image-parent">
          <img src={photos[0]} className="img-fluid" alt="quixote" fluid />
        </div>
      </a>
    </div>
  )
}

export default RestaurantCard

