import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../assets/laboratory.png';
import './header.styles.scss'

import Greeting from '../greeting/Greeting';

const Header = ({currentUser}) => (
  <div className='Header'>
    
    <Link to='/' className='logoContainer'>
      <img alt='logo' src={logo} className='logo'/>
    </Link>

    <Greeting date={new Date()}/>
    {
      currentUser ?
      <span>{currentUser.displayName}</span> :
      null
    }
    {
      currentUser ?
      <div onClick={() => auth.signOut()}>Cerrar sesión</div> :
      <Link to='/login'>Ingresar</Link>
    }
  </div>
)

export default Header;
