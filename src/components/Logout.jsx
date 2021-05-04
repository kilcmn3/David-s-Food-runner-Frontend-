import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  localStorage.getItem('userid');
  localStorage.clear();
  props.updateToken();
  return <Redirect to='/' />;
};
export default Logout;
