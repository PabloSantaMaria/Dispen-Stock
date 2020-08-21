import React from 'react';

const Greeting = ({date}) => {
  const hours = date.getHours();
  let greeting = '';

  if (hours < 12)
    greeting = 'Buen día';
  else if (hours > 20)
    greeting = 'Buenas noches';
  else
    greeting = 'Buenas tardes';

  return (
  <div className='Greeting'>
    <span>{greeting}</span>
  </div>
)}

export default Greeting;