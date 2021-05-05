import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  LogInContainer,
  Logout,
  Navbars,
  MainContainer,
  RestaurantContainer,
  RestaurantsListContainer,
  SignUp,
  Profile,
} from './exportComponents';
import * as requests from './containers/requests';
import './App.css';

const App = (props) => {
  const [token, setToken] = useState(localStorage.getItem('userid'));
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

  const updateToken = (bool) => {
    setToken(bool);
  };

  if (token === null) {
    return <LogInContainer updateToken={updateToken} />;
  }
  return (
    <>
      <Navbars updateListOfRestaurants={updateListOfRestaurants} />
      <Switch>
        <Route
          path='/logout'
          render={() => <Logout updateToken={updateToken} />}
        />
        <Route path='/signup' component={SignUp} />
        <Route path='/profile' component={Profile} />
        <Route path='/restaurants/:id' component={RestaurantContainer} />
        <Route
          path='/home'
          render={() => <RestaurantsListContainer restaurants={restaurants} />}
        />
      </Switch>
    </>
  );
};

export default App;
