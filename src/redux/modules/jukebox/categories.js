import createActions from '../createActions';
import { getThunk, postThunk } from '../../../helpers';

const getActions = createActions('getCategories');
const setActions = createActions('setCategory');

// The thunk

const getCategories = getThunk(getActions.actionCreators, '/categories');
const setCategory = postThunk(setActions.actionCreators, '/categories');

export const actions = {
  ...getActions.namedActions,
  ...setActions.namedActions,
  setCategory,
  getCategories
};

// Reducer
const initialState = {
  items: [],
  selected: '',
  isFetching: false
};

const { REQUEST, SUCCESS, FAILURE } = getActions.constants;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SUCCESS:
      return {
        ...state,
        items: action.data,
        isFetching: false,
      };
    case FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
