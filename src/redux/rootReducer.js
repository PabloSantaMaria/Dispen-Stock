import {combineReducers} from 'redux';

import userReducer from './user/userReducer';
import stockReducer from './stock/stockReducer';

export default combineReducers({
  user: userReducer,
  stock: stockReducer
});
