import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer, RestaurantContainer, LogInContainer, LogIn, SignUp, Profile } from './exportComponents';
import './App.css';

const App = () => {

  return (
    <Switch>
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/MainContainer' component={MainContainer} />
      <Route path='/restaurants/:id' component={RestaurantContainer} />
      <Route path='/profile' component={Profile} />
      <Route path='/' component={LogInContainer} />
    </Switch>
  );
}

export default App;
