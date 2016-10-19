export const ADD_TO_QUEUE_REQUEST = 'ADD_TO_QUEUE_REQUEST';
export const ADD_TO_QUEUE_SUCCESS = 'ADD_TO_QUEUE_SUCCESS';
export const ADD_TO_QUEUE_FAILURE = 'ADD_TO_QUEUE_FAILURE';

// Action Creators
const addToQueueRequest = () => ({ type: ADD_TO_QUEUE_REQUEST });
const addToQueueSuccess = data => ({ type: ADD_TO_QUEUE_SUCCESS, data });
const addToQueueFailure = message => ({ type: ADD_TO_QUEUE_FAILURE, message });

// Actions
export const actions = {
  addToQueueRequest,
  addToQueueSuccess,
  addToQueueFailure
};

// Reducer
// ========

var initialState = {
  isAdding: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_QUEUE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_TO_QUEUE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ADD_TO_QUEUE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
