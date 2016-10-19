import { fetchGet } from '../../../helpers';

export const GET_PLAYING_REQUEST = 'GET_PLAYING_REQUEST';
export const GET_PLAYING_SUCCESS = 'GET_PLAYING_SUCCESS';
export const GET_PLAYING_FAILURE = 'GET_PLAYING_FAILURE';

// Action Creators
const getPlayingRequest = () => ({ type: GET_PLAYING_REQUEST });
const getPlayingSuccess = data => ({ type: GET_PLAYING_SUCCESS, data });
const getPlayingFailure = message => ({ type: GET_PLAYING_FAILURE, message });

// Thunks
const getPlaying = () => {
  return (dispatch) => {
    dispatch(getPlayingRequest());
    return fetchGet('playing')
    .then(result => result.json())
    .then(json => dispatch(getPlayingSuccess(json)))
    .catch(e => dispatch(getPlayingFailure(e)));
  }
};

// Actions
export const actions = {
  getPlayingRequest,
  getPlayingSuccess,
  getPlayingFailure,
  getPlaying
};

// Reducer
// ========

var initialState = {
  queue: [],
  nowPlaying: {},
  currentCategory: '',
  categories: [],
  time: {
    start: new Date().getTime(),
    duration: 0
  },
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYING_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PLAYING_SUCCESS:
      const { queue, nowPlaying, currentCategory, time } = action.data;
      return {
        ...state,
        isFetching: false,
        queue,
        nowPlaying,
        currentCategory,
        time
      };
    case GET_PLAYING_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
