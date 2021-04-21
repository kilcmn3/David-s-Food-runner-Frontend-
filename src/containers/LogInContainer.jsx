import React from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn, SignUp } from '../exportComponents';

const LogInContainerc = () => {
  return (
    <div className='log in container'>
      <Redirect exact from='/login-signup' to='/login' />
      <LogIn />
      <SignUp />
    </div>
  );
};

export default LogInContainerc;
