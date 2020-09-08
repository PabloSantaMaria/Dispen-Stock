import React from 'react';
import './home-page.styles.scss';

import {connect} from 'react-redux';

import AddItemForm from '../../components/add-item-form/AddItemForm';
import SearchInput from '../../components/search-input/SearchInput';
import ItemsTable from '../../components/items-table/ItemsTable';
import { setSearchString } from '../../redux/stock/stockActions';
import {selectItems} from '../../redux/stock/stockSelectors';

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
        <AddItemForm/>
        <SearchInput placeholder='Buscar reactivo' onChange={this.handleChange}/>
        <ItemsTable items={filteredItems}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: selectItems(state),
  searchString: state.stock.searchString
})

const mapDispatchToProps = dispatch => ({
  setSearchString: searchString => dispatch(setSearchString(searchString))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);