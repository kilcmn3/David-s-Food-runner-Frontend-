import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LogInContainer,
  Logout,
  Navbars,
  MainContainer,
  RestaurantContainer,
  SignUp,
  Profile,
} from './exportComponents';
import * as requests from './containers/requests';
import './App.css';

const App = () => {
  const [token, setToken] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    requests
      .searchRestaurants('pizza')
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  const updateToken = () => {
    setToken(!token);
  };

  const updateListOfRestaurants = (list) => {
    setRestaurants(list);
  };

  if (!token) {
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
          render={() => <MainContainer restaurants={restaurants} />}
        />
      </Switch>
    </>
  );
};

export default App;
