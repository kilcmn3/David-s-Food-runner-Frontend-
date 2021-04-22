import React from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn, SignUp } from '../exportComponents';

const LogInContainer = () => {
  return (
    <div className='log in container'>
      <Redirect exact from='/login-signup' to='/login' />
      {/* <LogIn />
      <SignUp /> */}
    </div>
  );
};

export default LogInContainer;
