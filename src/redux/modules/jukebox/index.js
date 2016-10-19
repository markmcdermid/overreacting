import { combineReducers } from 'redux';
import playing from './playing';
import search from './search';
import categories from './categories';

export default combineReducers({
  search,
  playing,
  categories
});
