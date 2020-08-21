import React from 'react';
import './custom-input.styles.scss';

const CustomInput = ({handleChange, label, ...props}) => (
  <div className='CustomInput'>
    <input onChange={handleChange} {...props}/>
    {
      label ?
      <label>{label}</label> :
      null
    }
  </div>
)

export default CustomInput;