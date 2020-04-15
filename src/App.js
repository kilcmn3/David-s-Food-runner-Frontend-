import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainContainer, RestaurantContainer, LogInContainer } from './exportComponents';
import './App.css';

const App = () => {
  const checkAuth = () => {
    // const token = localStorage.getItem("userId")
  }

  // const AuthRoute = () => (
  //   <Route render={() => (
  //     checkAuth() ? (
  //       <Redirect to={{ pathname: '/main' }} />
  //     ) : (
  //         <Redirect to={{ pathname: '/login' }} />
  //       )
  //   )} />
  // )

  return (
    <div className='app'>
      <Switch>
        <Route path='/restaurants/:id' component={RestaurantContainer} />
        <Route path='/login-signup' component={LogInContainer} />
        <Route path='/' component={LogInContainer} />
        {/* <AuthRoute exact path='/' component={MainContainer} /> */}
      </Switch>
    </div>
  );
}

export default App;
