export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

// Action Creators
const searchRequest = searchText => ({ type: SEARCH_REQUEST, searchText });
const searchSuccess = data => ({ type: SEARCH_SUCCESS, data });
const searchFailure = message => ({ type: SEARCH_FAILURE, message });

// Actions
export const actions = {
  searchRequest,
  searchSuccess,
  searchFailure
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
      console.log(action.data);
      return {
        ...state,
        results: action.data.tracks.items,
        isFetching: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        results: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
