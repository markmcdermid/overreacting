import createActions from '../createActions';

const loginActions = createActions('login');
const { request, success, failure } = loginActions.actionCreators;

const getLocalExpire = (first, expiresAt) => {
  return expiresAt + (new Date().getTime() - first);
};

export const login = () => (dispatch) => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  dispatch(request());
  auth2.signIn()
    .then((result) => {
      const basicProfile = result.getBasicProfile();
      const authResponse = result.getAuthResponse();
      const token = {
        ...result,
        googleId: basicProfile.getId(),
        tokenObj: authResponse,
        tokenId: authResponse.id_token,
        accessToken: authResponse.access_token,
        profileObj: {
          // googleId: basicProfile.getId(),
          // imageUrl: basicProfile.getImageUrl(),
          // email: basicProfile.getEmail(),
          name: basicProfile.getName(),
          // givenName: basicProfile.getGivenName(),
          // familyName: basicProfile.getFamilyName()
        }
      };

      const { first_issued_at: first, expires_at: expiresAt } = authResponse;
      const expires = getLocalExpire(first, expiresAt);

      const info = {
        token: authResponse.id_token,
        name: basicProfile.getName(),
        expires
      };
      localStorage.setItem('token-info', JSON.stringify(info));
      dispatch(success(token));
    }, (err) => {
      dispatch(failure(err));
    });
};

// Actions
export const actions = {
  ...loginActions.namedActions,
  login
};

// Reducer
// ========

const getTokenFromStorage = () => {
  const tokenInfo = localStorage.getItem('token-info');
  if (!tokenInfo) return null;
  const json = JSON.parse(tokenInfo);
  const now = new Date().getTime();
  const expires = json.expires;
  if (now < expires) {
    return json.token;
  }
  return null;

};

const initialState = {
  isFetching: false,
  token: getTokenFromStorage()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.constants.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case loginActions.constants.SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.data.tokenId,
      };
    case loginActions.constants.FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
