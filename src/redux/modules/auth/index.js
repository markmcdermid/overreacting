import { combineReducers } from 'redux';
import oauth from './oauth';
import auth from './auth';

export default combineReducers({
  oauth,
  auth
});
