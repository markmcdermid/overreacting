export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginRequest = () => {
  return ({ type: LOGIN_REQUEST });
};
const loginSuccess = token => {
  return ({ type: LOGIN_SUCCESS, token });
};
const loginFailure = message => {
  return ({ type: LOGIN_FAILURE, message });
};

// Actions
export const actions = {
  loginRequest,
  loginSuccess,
  loginFailure
};

// Reducer
// ========

const reducer = (state = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('id_token'),
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default reducer;
