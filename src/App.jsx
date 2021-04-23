import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  MainContainer,
  RestaurantContainer,
  LogInContainer,
  LogIn,
  SignUp,
  Profile,
  Logout,
} from './exportComponents';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path='/logout' component={Logout} />
      <Route path='/signup' component={SignUp} />
      <Route path='/home' component={MainContainer} />
      <Route path='/profile' component={Profile} />
      <Route path='/restaurants/:id' component={RestaurantContainer} />
      <Route path='/' component={LogInContainer} />
    </Switch>
  );
};

export default App;
