import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import auth from './modules/auth';
import jukebox from './modules/jukebox';

const reducers = combineReducers({
  auth,
  jukebox,
  router
});

export default reducers;
