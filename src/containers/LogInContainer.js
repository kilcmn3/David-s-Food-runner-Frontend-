import React from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn, SignUp, Profile } from '../exportComponents';

const LogInContainerc = () => {
  return (
    <div className='log in container' >
      <Redirect exact from='/login-signup' to='/login' />
      <LogIn />
      <SignUp />
      <Profile />
    </div >
  )
}

export default LogInContainerc