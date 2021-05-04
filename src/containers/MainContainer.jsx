import React, { useState, useEffect } from 'react';
import { Navbars, RestaurantsListContainer } from '../exportComponents';

import * as requests from '../containers/requests';
import { withRouter } from 'react-router-dom';

const MainContainer = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    requests
      .searchRestaurants('pizza')
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  const updateListOfRestaurants = (list) => {
    setRestaurants(list);
  };

  return (
    <div className='main-container'>
      <Navbars updateListOfRestaurants={updateListOfRestaurants} />
      <RestaurantsListContainer restaurants={restaurants} />
    </div>
  );
};

// reference for useing withRouter: https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
export default withRouter(MainContainer);
