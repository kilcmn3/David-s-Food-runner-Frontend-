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
      <Route path='/login' component={LogIn} />
      <Route path='/Logout' component={Logout} />
      <Route path='/signup' component={SignUp} />
      <Route path='/Home' component={MainContainer} />
      <Route path='/Profile' component={Profile} />
      <Route path='/restaurants/:id' component={RestaurantContainer} />
      <Route path='/' component={LogInContainer} />
    </Switch>
  );
};

export default App;
