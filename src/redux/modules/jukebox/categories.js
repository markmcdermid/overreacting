const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

const categoriesRequest = () => ({ type: CATEGORIES_REQUEST });
const categoriesSuccess = data => ({ type: CATEGORIES_SUCCESS, data });
const categoriesFailure = () => ({ type: CATEGORIES_FAILURE });

export const actions = {
  categoriesRequest,
  categoriesSuccess,
  categoriesFailure
};

// Reducer
const initialState = {
  items: [],
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.data,
        isFetching: false,
      };
    case CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
