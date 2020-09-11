import React from 'react';
import './home-page.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AddItemForm from '../../components/add-item-form/AddItemForm';
import SearchInput from '../../components/search-input/SearchInput';
import ItemsTable from '../../components/items-table/ItemsTable';
import { setSearchString } from '../../redux/stock/stockActions';
import {selectItems, selectSearchString, selectItemsTotal} from '../../redux/stock/stockSelectors';

class HomePage extends React.Component {

  componentWillUnmount() {
    this.props.setSearchString('');
  }

  handleChange = e => this.props.setSearchString(e.target.value);

  render() {
    const {items, searchString, total} = this.props;

    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase()))

    return (
      <div className='HomePage'>
        <AddItemForm/>
        <SearchInput placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <span>Total: {total}</span>
        <ItemsTable items={filteredItems}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  items: selectItems,
  searchString: selectSearchString,
  total: selectItemsTotal
})

const mapDispatchToProps = dispatch => ({
  setSearchString: searchString => dispatch(setSearchString(searchString))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);