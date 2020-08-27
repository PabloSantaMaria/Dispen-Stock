import React from 'react';
import './home-page.styles.scss';

import {ITEMS_DATA} from './items-data';

import SearchInput from '../../components/search-input/SearchInput';
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
      items: ITEMS_DATA,
      keys: Object.keys(ITEMS_DATA[0])
    })
  }

  handleChange = e => this.setState({searchString: e.target.value})

  render() {
    const {items, keys, searchString} = this.state;

    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase()))

    return (
      <div className='HomePage'>
        <SearchInput placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <ItemsTable headers={keys} items={filteredItems}/>
      </div>
    )
  }
}

export default HomePage;