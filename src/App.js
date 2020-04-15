import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer, RestaurantContainer, SignUp, LogIn, Profile } from './exportComponents';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path='/restaurants/:id' component={RestaurantContainer} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
