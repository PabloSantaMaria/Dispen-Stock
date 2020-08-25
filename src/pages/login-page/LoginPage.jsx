import React from 'react';
import './login-page.styles.scss';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const LoginPage = () => (
  <div className='LoginPage'>
    <SignIn/>
    <SignUp/>
  </div>
)

export default LoginPage;