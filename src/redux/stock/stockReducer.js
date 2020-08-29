import {StockActionTypes} from './stockTypes';

const INITIAL_STATE = {
  items: [],
  searchString: ''
}

const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockActionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    
    case StockActionTypes.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload
      }
    
    case StockActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    default:
      return state;
  }
}

export default stockReducer;