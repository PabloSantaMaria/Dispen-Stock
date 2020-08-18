import React from 'react';
import './item-table.styles.css';

import Item from '../item/Item';
import itemsData from './items-data';
import InputSearch from '../input-search/InputSearch';

class ItemTable extends React.Component {
  constructor() {
    super()

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
      <div className='ItemList'>
      {/* Crear otro componente */}
        <InputSearch placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <table>
          <thead>
            <tr>
              {
                this.state.keys.map(key => 
                  <th key={key}>{key.toUpperCase()}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              filteredItems.map(item => 
                <Item key={item.id} item={item}/>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ItemTable