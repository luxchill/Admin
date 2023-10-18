import { combineReducers } from 'redux';

// reducer imports
import customizationReducer from './customizationReducer';
import userReducer from './reducer/userReducer'; // Thêm userReducer vào đây

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
  customization: customizationReducer,
  user: userReducer // Thêm userReducer vào đây
});

export default rootReducer;
