import React, { useEffect } from 'react';
import { LogInContainer } from '../exportComponents';
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem('userid');
    localStorage.clear();
    props.updateToken(null);
    props.history.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LogInContainer />;
};
export default withRouter(Logout);
