import {StockActionTypes} from './stockTypes';

export const setItems = items => ({
  type: StockActionTypes.SET_ITEMS,
  payload: items
});

export const setSearchString = searchString => ({
  type: StockActionTypes.SET_SEARCH_STRING,
  payload: searchString
});

export const addItem = item => ({
  type: StockActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: StockActionTypes.REMOVE_ITEM,
  payload: item
});

export const increaseQty = item => ({
  type: StockActionTypes.INCREASE_QTY,
  payload: item
})

export const decreaseQty = item => ({
  type: StockActionTypes.DECREASE_QTY,
  payload: item
})