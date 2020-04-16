import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn, SignUp, Profile } from '../exportComponents';

export default class LogInContainerc extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }
  componentDidMount() {
    //Maybe check local.storage for user id?
  }

  // handleLogout = () => {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   });
  // }

  // handleLogoutClick() {
  //   axios
  //     .delete("http://localhost:3001/logout", { withCredentials: true })
  //     .then(response => {
  //       this.props.handleLogout();
  //     })
  //     .catch(error => {
  //       console.log("logout error", error);
  //     });
  // }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  handleSuccessfulAuth = (data) => {
    this.handleLogin(data);
    this.props.history.push("/MainContainer");
  }

  render() {
    return (
      <div className='log in container' >
        <Redirect exact from='/login-signup' to='/login' />
        <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <SignUp />
        <Profile />
      </div >
    )
  }
}

