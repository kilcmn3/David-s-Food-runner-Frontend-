import React from 'react';
import RestaurantCard from '../components/RestaurantCard';


const RestaurantsListContainer = (props) => {

  const renderRestaurants = () => {
    if (!props.restaurants || props.restaurants.length === 0) {
      return null
    } else if (props.restaurant.length >= 1) {
      return props.restaurants.map((restaurant, index) => {
        return <RestaurantCard key={index} restaurant={restaurant} />
      })
    }
  }

  return (
    <div className="restaurant list container">
      <h3>RestaurantsListContainer</h3>
      {renderRestaurants()}
    </div>
  );

}

export default RestaurantsListContainer