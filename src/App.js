import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {auth, createUser} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userReference = await createUser(userAuth);
        
        //siempre viene userReference porque si el userAuth no existe en la db, crea uno en la db
        //onSnapshot se suscribe a cualquier cambio que se realice en ese resource,
        // pero tambien nos llega el primer estado de esa data
        // Eso usamos para setear el estado del currentUser
        userReference.onSnapshot(userSnapshot => {
          this.setState ({
            currentUser: {
              id: userSnapshot.id,
              ...userSnapshot.data()
            }
          })
        });
      }
      else this.setState({currentUser: userAuth}); //setea el currentUser en null porque userAuth es null
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
