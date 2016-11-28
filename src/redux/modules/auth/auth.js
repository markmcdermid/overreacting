import createActions from '../createActions';

const loginActions = createActions('login');
const { request, success, failure } = loginActions.actionCreators;

const LOGIN_ANIMATE = 'LOGIN_ANIMATE';
const animate = () => ({ type: LOGIN_ANIMATE });

const getLocalExpire = (first, expiresAt) => expiresAt + (new Date().getTime() - first);

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
      dispatch(animate());
      setTimeout(() => {
        dispatch(success(token));
      }, 2000);
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
    case LOGIN_ANIMATE:
      return {
        ...state,
        isAnimating: true
      };
    case loginActions.constants.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAnimating: false
      };
    case loginActions.constants.SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.data.tokenId,
        isAnimating: false
      };
    case loginActions.constants.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAnimating: false
      };
    default:
      return state;
  }
};

export default reducer;
