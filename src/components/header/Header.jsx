import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/laboratory.png';
import './header.styles.scss'

import Greeting from '../greeting/Greeting';

const Header = () => (
  <div className='Header'>
    
    <Link to='/' className='logoContainer'>
      <img alt='logo' src={logo} className='logo'/>
    </Link>

    <Greeting date={new Date()}/>
    {/* User */}
  </div>
)

export default Header;
