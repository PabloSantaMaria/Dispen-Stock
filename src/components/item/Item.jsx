import React from 'react'

const Item = ({item}) => {
  const values = Object.values(item);

  return (
  <tr className='Item'>
    {
      values.map(value =>
        <td>{value}</td>
      )
    }
  </tr>
)}

export default Item