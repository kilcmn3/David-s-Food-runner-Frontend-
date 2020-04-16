import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, MainContainer, RestaurantContainer, LogInContainer, LogIn, SignUp, Profile } from './exportComponents';
import './App.css';

const App = () => {

  console.log("app comp?")
  return (
    <Switch>
      <Route path='/login-signup' component={LogInContainer} />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/restaurants/:id' component={RestaurantContainer} />
      <Route path='/profile' component={Profile} />
      <Route path='/' component={MainContainer} />
    </Switch>
  );
}

export default App;
