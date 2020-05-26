import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Header from './components/Navigation/Header';
import logoSmall from './img/SmallColorLogo.png';
import './App.css';

import PrivateRoute from './components/Navigation/PrivateRoute';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className='nav-container'>
          <Header />
          <img src={logoSmall} alt='Logo' />
        </div>
        <div className="routes">
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={AuthPage} />
            <Route path={`${process.env.PUBLIC_URL}/register`} component={AuthPage} />
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={AuthPage} />
            <PrivateRoute path={`${process.env.PUBLIC_URL}/recipes-home`} component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;