import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {auth, createUser} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setItems} from './redux/stock/stockActions';
import {setCurrentUser} from './redux/user/userActions';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ItemDetailsPage from './pages/item-details-page/ItemDetailsPage';
import LoginPage from './pages/login-page/LoginPage';
import {ITEMS_DATA} from './assets/items-data';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.props.setItems(ITEMS_DATA);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userReference = await createUser(userAuth);
        
        //siempre viene userReference porque si el userAuth no existe en la db, crea uno en la db
        //onSnapshot se suscribe a cualquier cambio que se realice en ese resource,
        // pero tambien nos llega el primer estado de esa data
        // Eso usamos para setear el estado del currentUser
        userReference.onSnapshot(userSnapshot => {
          this.props.setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data()
          })
        });
      }
      else this.props.setCurrentUser(userAuth); //setea el currentUser en null porque userAuth es null
    })
  }

  componentWillUnmount() {
    // auth.signOut();
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/item' component={ItemDetailsPage} />
          <Route exact path='/login' render={() =>
            this.props.currentUser ? (<Redirect to='/'/>) : (<LoginPage/>)
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setItems: items => dispatch(setItems(items)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
