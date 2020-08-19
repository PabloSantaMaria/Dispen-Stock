import React from 'react';

import {itemsData} from './items-data';

import InputSearch from '../../components/input-search/InputSearch';
import ItemsTable from '../../components/items-table/ItemsTable';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      keys: [],
      searchString: ''
    }
  }

  componentDidMount() {
    this.setState({
      items: itemsData,
      keys: Object.keys(itemsData[0])
    })
  }

  handleChange = e => this.setState({searchString: e.target.value})

  render() {
    const filteredItems = this.state.items.filter(item => 
      item.name.toLowerCase().includes(this.state.searchString.toLowerCase()))

    return (
      <div className='HomePage'>
        <InputSearch placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <ItemsTable headers={this.state.keys} items={filteredItems}/>
      </div>
    )
  }
}

export default HomePage;