import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

import RestaurantCard from '../components/RestaurantCard';

const RestaurantsListContainer = (props) => {
  const [activePage, setActivePage] = useState(1);
  const _itemsCountPerPage = 10;

  useEffect(() => {
    setActivePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderRestaurants = () => {
    let offSet = (activePage - 1) * _itemsCountPerPage;
    let restaurantPerPage = props.restaurants
      .slice(offSet)
      .slice(0, _itemsCountPerPage);

    return restaurantPerPage.map((restaurant, index) => {
      return <RestaurantCard key={index} restaurant={restaurant} />;
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

  return props.restaurants.length > 1 ? (
    <div className='restaurant-list-container'>
      <Container>{renderRestaurants()}</Container>
      {renderPagination()}
    </div>
  ) : (
    <div></div>
  );
};

export default RestaurantsListContainer;
