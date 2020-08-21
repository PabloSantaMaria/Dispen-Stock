import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ItemDetailsPage from './pages/item-details-page/ItemDetailsPage';
import LoginPage from './pages/login-page/LoginPage';

import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route path='/item' component={ItemDetailsPage} />
    </Switch>
  </div>
)

export default App;
