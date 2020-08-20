import React from 'react'

import { withRouter } from 'react-router-dom';

import './item.scss';

const Item = ({item, history}) => {
  const values = Object.values(item);
  
  return (
  <tr className='Item' onClick={() => history.push(`/item/${item.id}`)}>
    {
      values.map(value =>
        <td key={value}>{value}</td>
      )
    }
  </tr>
)}

export default withRouter(Item)
