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
    
    case StockActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id) //devuelve true con todos menos con el que quiero sacar
      }

    case StockActionTypes.INCREASE_QTY:
      return {
        ...state,
        items: state.items.map(
          item => item.id === action.payload.id ? 
          {...item, quantity: item.quantity + 1} :
          item
        )
      }

    case StockActionTypes.DECREASE_QTY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.quantity > 0 ?
          {...item, quantity: item.quantity - 1} :
          item
        )
      }
    default:
      return state;
  }
}

export default stockReducer;