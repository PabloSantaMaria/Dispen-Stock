import React from 'react';
import './items-table.styles.scss';

import Item from '../item/Item';

const ItemsTable = ({headers, items}) => (
  <div className='ItemsTable'>
    <table>
        <thead>
          <tr>
            {
              headers.map(header => <th key={header}>{header.toUpperCase()}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => <Item key={item.id} item={item}/>)
          }
        </tbody>
      </table>
  </div>
)

export default ItemsTable