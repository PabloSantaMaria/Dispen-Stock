import React from "react";
import './sign-up.styles.scss';

import {auth, createUser} from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/CustomButton';
import CustomInput from '../custom-input/CustomInput';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);

      await createUser(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='SignUp form'>
        <h2>No tengo una cuenta</h2>
        <span>Registrarse con email y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <CustomInput type='text' name='displayName' value={this.state.displayName} required
            label='Nombre'
            handleChange={this.handleChange}
          />
          <CustomInput type='email' name='email' value={this.state.email} required
            label='Email'
            handleChange={this.handleChange}
          />
          <CustomInput type='password' name='password' value={this.state.password} required
            label='Contraseña'
            handleChange={this.handleChange}
          />
          <CustomInput type='password' name='confirmPassword' value={this.state.confirmPassword} required
            label='Confirmar contraseña'
            handleChange={this.handleChange}
          />

          <div className='buttons'>
            <CustomButton type='submit'>REGISTRARSE</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;