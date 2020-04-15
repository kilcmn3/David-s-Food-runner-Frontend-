import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LogIn, SignUp, Profile } from '../exportComponents';

const LogInContainer = () => {
  return (
    <div className='log in container'>
      <Redirect exact from='/login-signup' to='login' />
      <Switch>
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div >
  );
}

export default LogInContainer
