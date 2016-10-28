import { apiPost } from '../../../helpers';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_RESET = 'SEARCH_RESET';

// Action Creators
const searchRequest = searchText => ({ type: SEARCH_REQUEST, searchText });
const searchSuccess = data => ({ type: SEARCH_SUCCESS, data });
const searchFailure = message => ({ type: SEARCH_FAILURE, message });
const searchReset = () => ({ type: SEARCH_RESET });

// Thunks
const search = (searchText) => {
  return (dispatch) => {
    dispatch(searchRequest(searchText));
    const body = { query: searchText };
    return apiPost('/tidySearch', body)
      .then(results => results.json())
      .then(json => dispatch(searchSuccess(json)))
      .catch(e => dispatch(searchFailure(e)));
  };
};

// Actions
export const actions = {
  searchRequest,
  searchSuccess,
  searchFailure,
  searchReset,
  search
};

// Reducer
// ========

const initialState = {
  results: [],
  text: '',
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        text: action.searchText,
        isFetching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.data,
        isFetching: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case SEARCH_RESET:
      return {
        ...state,
        text: ''
      };
    default:
      return state;
  }
};

export default reducer;
