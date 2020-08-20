import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ItemDetailsPage from './pages/item-details-page/ItemDetailsPage';

import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/item' component={ItemDetailsPage} />
    </Switch>
  </div>
)

export default App;
