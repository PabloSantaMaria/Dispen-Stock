import React from 'react';
import './sign-in.styles.scss';

import {signInWithGoogle} from '../../firebase/firebase.utils';

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

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const {email, password} = this.state;
    return (
      <div className='SignIn'>
        <h2>Ya tengo una cuenta</h2>
        <span>Ingrese con su email y contraseña</span>

        <form>
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
            <CustomButton isGoogleButton onClick={signInWithGoogle}>
              INGRESAR CON GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
