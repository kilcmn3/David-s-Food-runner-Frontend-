import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
  const userLogIn = localStorage.getItem('userid');
  return (
    <Switch>
      <Route path='/login' component={LogIn} />
      <Route path='/Logout' component={Logout} />
      <Route path='/signup' component={SignUp} />
      <Route
        path='/Home'
        render={() =>
          userLogIn ? <MainContainer /> : <Redirect to='/login' />
        }
      />
      <Route
        path='/profile'
        render={() => (userLogIn ? <Profile /> : <Redirect to='/login' />)}
      />
      <Route
        path='/restaurants/:id'
        render={() =>
          userLogIn ? <RestaurantContainer /> : <Redirect to='/login' />
        }
      />
      <Route path='/' component={LogInContainer} />
    </Switch>
  );
};

export default App;
