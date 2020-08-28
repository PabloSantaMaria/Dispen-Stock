import {StockActionTypes} from './stockTypes';

export const setItems = items => ({
  type: StockActionTypes.SET_ITEMS,
  payload: items
});

export const setSearchString = searchString => ({
  type: StockActionTypes.SET_SEARCH_STRING,
  payload: searchString
})
