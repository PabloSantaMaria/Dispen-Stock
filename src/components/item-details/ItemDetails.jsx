import React from 'react';

import {connect} from 'react-redux';

const ItemDetails = ({itemId, items}) => {
  
  const detailedItem = items.find(item => item.id === itemId);

  return (
    <div className='ItemDetails'>
      <h2>ID: {detailedItem.id}</h2>
      <h2>Nombre: {detailedItem.name}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.stock.items
})

export default connect(mapStateToProps)(ItemDetails);