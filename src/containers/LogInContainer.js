import React, { Component } from 'react';
import { LogIn, SignUp, Profile } from '../exportComponents';

export default class LogInContainer extends Component {
  render() {
    return (
      <div className='logInContainer'>
        <h3>l ogInContainer</h3>
        <LogIn />
        <SignUp />
        <Profile />
      </div>
    );
  }
}
