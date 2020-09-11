import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/stock/stockActions';

import CustomInput from '../custom-input/CustomInput';
import CustomButton from '../custom-button/CustomButton';

class AddItemForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      id: '',
      name: '',
      quantity: 0
    }
  }

  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    
    if (name === 'quantity')
      value = parseInt(value);
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const itemToAdd = {...this.state};
    console.log(itemToAdd);
    
    this.props.addItem(itemToAdd);
  }
  
  render() {
    const {id, name, quantity} = this.state;
    
    return (
      <div className='AddItemForm'>
        <form onSubmit={this.handleSubmit}>
          <CustomInput type='text' name='id' label='ID' value={id} handleChange={this.handleChange}/>
          <CustomInput type='text' name='name' label='Nombre' value={name} handleChange={this.handleChange}/>
          <CustomInput type='number' name='quantity' label='Cantidad' value={quantity} step="1" min="0" handleChange={this.handleChange}/>

          <CustomButton type='submit'>AGREGAR</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: itemToAdd => dispatch(addItem(itemToAdd))
})
  
export default connect(null, mapDispatchToProps)(AddItemForm);