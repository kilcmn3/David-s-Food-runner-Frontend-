import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LogInContainer,
  Logout,
  MainContainer,
  RestaurantContainer,
  SignUp,
  Profile,
} from './exportComponents';
import './App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('userid'));

  const updateToken = (bool) => {
    setToken(bool);
  };

  if (token === null) {
    return (
      <Route
        path='/'
        render={() => <LogInContainer updateToken={updateToken} />}
      />
    );
  }
  return (
    <Switch>
      <Route
        path='/logout'
        render={() => <Logout updateToken={updateToken} />}
      />
      <Route path='/signup' component={SignUp} />
      <Route path='/profile' component={Profile} />
      <Route path='/restaurants/:id' component={RestaurantContainer} />
      <Route path='/home' component={MainContainer} />
    </Switch>
  );
};

export default App;
