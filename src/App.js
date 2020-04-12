import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LogInContainer, MainContainer, NavBar } from './exportComponents';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Switch>
        <Route path='/login' component={LogInContainer} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
