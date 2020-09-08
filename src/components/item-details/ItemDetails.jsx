import React from 'react';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectItems} from '../../redux/stock/stockSelectors';

const ItemDetails = ({itemId, items}) => {
  
  const detailedItem = items.find(item => item.id === itemId);

  return (
    <div className='ItemDetails'>
      <h2>ID: {detailedItem.id}</h2>
      <h2>Nombre: {detailedItem.name}</h2>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  items: selectItems
})

export default connect(mapStateToProps)(ItemDetails);