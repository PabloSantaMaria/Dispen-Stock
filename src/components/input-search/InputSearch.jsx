import React from 'react';

import './input-search.styles.css';

const InputSearch = ({placeholder, onChange}) => (
  <input 
    className='InputSearch' 
    type='search' 
    placeholder={placeholder} 
    onChange={onChange}
  />
)

export default InputSearch;