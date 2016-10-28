import createActions from '../createActions';

const oauthActions = createActions('oauthBuild');

export const setupGoogleLogin = () => (dispatch) => {
  dispatch(oauthActions.actionCreators.request());
  try {
    const element = document.getElementsByTagName('script')[0];
    const js = document.createElement('script');
    js.id = 'google-login';
    js.src = '//apis.google.com/js/client:platform.js';
    element.parentNode.insertBefore(js, element);
    js.onload = () => {
      window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init({ client_id: '147711705910-gks81l3kpnuaotd22jn3vcdgobajsdgu.apps.googleusercontent.com' });
        }
        dispatch(oauthActions.actionCreators.success());
      });
    };
  } catch (e) {
    dispatch(oauthActions.actionCreators.failure(e));
  }
};

export const actions = {
  setupGoogleLogin,
  ...oauthActions.namedActions
};

const initialState = {
  isFetching: false,
  didFetch: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case oauthActions.constants.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case oauthActions.constants.SUCCESS:
      return {
        ...state,
        isFetching: false,
        didFetch: true
      };
    case oauthActions.constants.FAILURE:
      return {
        ...state,
        isFetching: false,
        didFetch: false
      };
    default:
      return state;
  }
};

export default reducer;
