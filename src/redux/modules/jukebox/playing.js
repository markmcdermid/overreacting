import createActions from '../createActions';
import { getThunk } from '../../../helpers';

const { actionCreators, namedActions, constants } = createActions('getPlaying');

// The thunk

const getPlaying = getThunk(actionCreators, '/playing');

export const actions = {
  ...namedActions,
  getPlaying
};

// Reducer
// ========

const initialState = {
  queue: [],
  nowPlaying: {},
  currentCategory: '',
  categories: [],
  time: {
    start: new Date().getTime(),
    duration: 0
  },
  isFetching: false,
  errorMsg: ''
};

const { REQUEST, SUCCESS, FAILURE } = constants;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        isFetching: true,
        errorMsg: ''
      };
    }
    case SUCCESS: {
      const { queue, nowPlaying, currentCategory, time } = action.data;
      return {
        ...state,
        isFetching: false,
        queue,
        nowPlaying,
        currentCategory,
        time
      };
    }
    case FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMsg: action.errorMsg
      };
    }
    default:
      return state;
  }
};

export default reducer;
