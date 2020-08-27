import React from 'react';
import './sign-in.styles.scss';

import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

import CustomInput from '../custom-input/CustomInput';
import CustomButton from '../custom-button/CustomButton';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.error(error);
    } 
  }

  render() {
    const {email, password} = this.state;
    return (
      <div className='SignIn form'>
        <h2>Ya tengo una cuenta</h2>
        <span>Ingrese con su email y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <CustomInput type='email' name='email' value={email} required
            label='Email'
            handleChange={this.handleChange}
          />
          <CustomInput type='password' name='password' value={password} required
            label='Constraseña'
            handleChange={this.handleChange}
          />

          <div className='buttons'>
            <CustomButton type='submit'>INGRESAR</CustomButton>
            <CustomButton isGoogleButton type='button' onClick={signInWithGoogle}>
              INGRESAR CON GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
