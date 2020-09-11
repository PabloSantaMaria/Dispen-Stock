import React from 'react'

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeItem } from '../../redux/stock/stockActions';

import './item.scss';

const Item = ({item, history, removeItem}) => {
  const values = Object.values(item);
  
  return (
    <tr className='Item'>
      {
        values.map(value =>
          <td key={value}>{value}</td>
        )
      }
      <td className='remove-item' onClick={() => removeItem(item)}>&#10007;</td>
      <td className='details-button' onClick={() => history.push(`/item/${item.id}`)}>Detalles</td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(withRouter(Item));
