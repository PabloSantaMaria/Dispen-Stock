import React from 'react';

import './search-input.styles.scss';

const SearchInput = ({placeholder, onChange}) => (
  <input 
    className='SearchInput' 
    type='search' 
    placeholder={placeholder} 
    onChange={onChange}
  />
)

export default SearchInput;