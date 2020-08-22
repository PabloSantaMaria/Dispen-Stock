import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ItemDetailsPage from './pages/item-details-page/ItemDetailsPage';
import LoginPage from './pages/login-page/LoginPage';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    // auth.signOut();
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route path='/item' component={ItemDetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
