import React from 'react';

import CustomInput from '../custom-input/CustomInput';

const ItemEditor = () => {

    return (
      <div className='ItemEditor'>
        <h2>Item id {id}</h2>
        <h2>{name}</h2>

        <CustomInput />
      </div>
    )
}

export default ItemEditor;