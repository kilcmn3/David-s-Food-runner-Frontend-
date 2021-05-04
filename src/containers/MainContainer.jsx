import React from 'react';
import { RestaurantsListContainer } from '../exportComponents';

import { withRouter } from 'react-router-dom';

const MainContainer = (props) => {
  return (
    <div className='main-container'>
      <RestaurantsListContainer restaurants={props.restaurants} />
    </div>
  );
};

// reference for useing withRouter: https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
export default withRouter(MainContainer);
