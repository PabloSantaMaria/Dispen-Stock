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
    const filteredItems = this.state.items.filter(item => 
      item.name.toLowerCase().includes(this.state.searchString.toLowerCase()))

    return (
      <div className='HomePage'>
        <SearchInput placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <ItemsTable headers={this.state.keys} items={filteredItems}/>
      </div>
    )
  }
}

export default HomePage;