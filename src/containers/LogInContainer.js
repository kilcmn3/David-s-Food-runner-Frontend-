import React, { Component } from 'react';
import { LogIn, SignUp, Profile } from '../exportComponents';

export default class LogInContainer extends Component {
  render() {
    return (
      <div className='logInContainer'>
        <LogIn />
        <SignUp />
        <Profile />
      </div>
    );
  }
}
