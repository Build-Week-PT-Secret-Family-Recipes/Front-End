import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PriviteRoute';
import Login from "./components/LoginPage"

// import PrivateRoute from './components/PriviteRoute';
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <div className='nav-container'>
        <Header />
      </div>
      <h1>Test</h1>
      <div className='routes'>
        <h1>Hello</h1>
          {/* <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} /> */}
          {/* <PrivateRoute path='/recipe-home' component={} /> */}
    
      </div>
    </div>
  );
}

export default App;
