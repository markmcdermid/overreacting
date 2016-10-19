import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import auth from './modules/auth';

const reducers = combineReducers({
  auth,
  router
});

export default reducers;
