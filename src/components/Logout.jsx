import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  localStorage.getItem('userid');
  localStorage.clear();
  props.updateToken(null);
  return <Redirect to='/' />;
};
export default Logout;
