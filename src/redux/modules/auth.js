export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = token => ({ type: LOGIN_SUCCESS, token });
const loginFailure = message => ({ type: LOGIN_FAILURE, message });

// Actions
export const actions = {
  loginRequest,
  loginSuccess,
  loginFailure
};


// Reducer
// ========

const initialState = {
  isFetching: false,
  token: localStorage.getItem('id_token')
};

console.log(initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token.tokenId,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
