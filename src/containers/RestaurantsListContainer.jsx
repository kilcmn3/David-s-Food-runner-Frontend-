import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';

import RestaurantCard from '../components/RestaurantCard';

const RestaurantsListContainer = (props) => {
  const [activePage, setActivePage] = useState(1);
  const _itemsCountPerPage = 10;

  useEffect(() => {
    setActivePage(1);
  }, [props.shouldUpdate]);

  const renderRestaurants = () => {
    let offSet = (activePage - 1) * _itemsCountPerPage;
    let restaurantPerPage = props.restaurants
      .slice(offSet)
      .slice(0, _itemsCountPerPage);

    return restaurantPerPage.map((restaurant, index) => {
      return (
        <RestaurantCard
          key={index}
          restaurant={restaurant}
          handleClick={props.handleClick}
        />
      );
    });
  };

  const renderPagination = () => {
    return (
      <Pagination
        itemClass='page-item'
        linkClass='page-link'
        activePage={activePage}
        _itemsCountPerPage={10}
        totalItemsCount={props.restaurants.length}
        pageRangeDisplayed={Math.ceil(props.restaurants.length / 10)}
        onChange={(pageNumber) => setActivePage(pageNumber)}
      />
    );
  };

  return props.restaurants.length !== undefined ? (
    <div className='restaurant list container'>
      {renderRestaurants()}
      {renderPagination()}
    </div>
  ) : (
    <div></div>
  );
};

export default RestaurantsListContainer;
