import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer, RestaurantContainer, SignUp, LogIn, Profile } from './exportComponents';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path='/restaurants/:id' component={RestaurantContainer} />
        <Route path='/main' component={MainContainer} />
        <Route path="/" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
