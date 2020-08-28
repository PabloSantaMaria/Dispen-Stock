import React from 'react';
import './home-page.styles.scss';

import {connect} from 'react-redux';

import SearchInput from '../../components/search-input/SearchInput';
import ItemsTable from '../../components/items-table/ItemsTable';
import { setSearchString } from '../../redux/stock/stockActions';

class HomePage extends React.Component {

  componentWillUnmount() {
    this.props.setSearchString('');
  }

  handleChange = e => this.props.setSearchString(e.target.value);

  render() {
    const {items, searchString} = this.props;

    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase()))

    return (
      <div className='HomePage'>
        <SearchInput placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <ItemsTable items={filteredItems}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.stock.items,
  searchString: state.stock.searchString
})

const mapDispatchToProps = dispatch => ({
  setSearchString: searchString => dispatch(setSearchString(searchString))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);