import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LogInContainer,
  Logout,
  Navbars,
  RestaurantContainer,
  RestaurantsListContainer,
  SignUp,
  Profile,
} from './exportComponents';
import * as requests from './containers/requests';
import './App.css';

const App = () => {
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
    return (
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route
          path='/'
          render={() => <LogInContainer updateToken={updateToken} />}
        />
      </Switch>
    );
  } else {
    return (
      <>
        <Navbars updateListOfRestaurants={updateListOfRestaurants} />
        <Switch>
          <Route
            path='/logout'
            render={() => <Logout updateToken={updateToken} />}
          />
          <Route path='/profile' component={Profile} />
          <Route path='/restaurants/:id' component={RestaurantContainer} />
          <Route
            path='/home'
            render={() => (
              <RestaurantsListContainer restaurants={restaurants} />
            )}
          />
        </Switch>
      </>
    );
  }
};

export default App;
