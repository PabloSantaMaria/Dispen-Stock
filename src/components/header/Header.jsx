import React from 'react';
import Greeting from '../greeting/Greeting';

const Header = () => (
  <div className='Header'>
    {/* Logo */}

    <Greeting date={new Date()}/>
    {/* User */}
  </div>
)

export default Header;
