import React from 'react';
import './App.css';

import ItemTable from './components/item-table/ItemTable';
import Header from './components/header/Header';

const App = () => (
  <div className='App'>
    <Header />
    <ItemTable/>
  </div>
)

export default App;
