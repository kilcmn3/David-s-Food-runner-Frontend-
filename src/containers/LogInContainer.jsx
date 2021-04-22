import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn } from '../exportComponents';

//What is loginContainer does?
const LogInContainer = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <>
      <LogIn />
    </>
  );
};

export default LogInContainer;
