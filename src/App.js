import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';

function App() {
  return (
    <>    
      <NavBar />
      <Switch>      
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/rooms/' component={Rooms}></Route>
        <Route exact path='/rooms/:slug' component={SingleRoom}></Route>    
        <Route component={Error}></Route> 
      </Switch> 
    </>
  );
}

export default App;
