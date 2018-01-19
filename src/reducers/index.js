import {combineReducers} from 'redux';
import signinReducer from './signinuser';
import marketappslistReducer from './marketappslist';

export default combineReducers({
  signinReducer,
  list: marketappslistReducer
});
