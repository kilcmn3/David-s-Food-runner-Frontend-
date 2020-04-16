import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LogIn, SignUp, Profile } from '../exportComponents';

const LogInContainer = () => {
  console.log("log in container")
  return (
    <div className='log in container'>
      <Redirect exact from='/login-signup' to='/login' />
      <LogIn />
      <SignUp />
      <Profile />
    </div >
  );
}

export default LogInContainer
