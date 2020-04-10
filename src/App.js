import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  LogInContainer,
  SignUp,
  SearchContainer,
  Profile,
  MainContainer,
  NavBar,
} from './exportComponents';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Switch>
        <Route path='/login' component={LogInContainer} />
        <Route path='/signup' component={SignUp} />
        <Route path='/search' component={SearchContainer} />
        <Route path='/profile' component={Profile} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
