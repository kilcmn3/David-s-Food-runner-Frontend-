import React, { useState, useEffect } from 'react';
import { RestaurantsListContainer, Navbars } from '../exportComponents';
import * as requests from './requests';

import { withRouter } from 'react-router-dom';

const MainContainer = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    requests
      .searchRestaurants('pizza')
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    requests
      .searchRestaurants(this.state.search)
      .then((response) => response.json())
      .then((restaurants) =>
        this.setState({ restaurants, shouldUpdate: !this.state.shouldUpdate })
      );
  };

  const handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  return restaurants.length > 1 ? (
    <div className='MainContainer'>
      <Navbars
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />
      <RestaurantsListContainer restaurants={restaurants} />
    </div>
  ) : (
    <div></div>
  );
};

export default withRouter(MainContainer);
