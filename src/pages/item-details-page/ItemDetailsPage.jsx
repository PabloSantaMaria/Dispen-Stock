import React from 'react';

import ItemDetails from '../../components/item-details/ItemDetails';

const ItemDetailsPage = ({location}) => {
  const id = location.pathname.split('/')[2];

  return (
    <div className='ItemDetailsPage'>
      <ItemDetails itemId={id}/>
    </div>
  )
}

export default ItemDetailsPage;