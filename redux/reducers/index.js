import { combineReducers } from 'redux';
import authReducer from "./authReducer"
import orderReducer from "./orderReducer"

export default combineReducers({
    // error: errorReducer,
    auth: authReducer,
    order : orderReducer
  });
  