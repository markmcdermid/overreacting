import { SERVER_URL, CONTENT_TYPE } from '../config';

export const apiPost = (endPoint, body, customHeaders = {}) => {
  const defaultHeaders = { 'Content-Type': CONTENT_TYPE };
  const opts = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { ...customHeaders, ...defaultHeaders }
  };

  console.log(opts);
  return fetch(`${SERVER_URL}${endPoint}`, opts);
};

export const apiGet = endPoint => fetch(`${SERVER_URL}${endPoint}`);

// The thunk
export const getThunk = (actions, endPoint) => () => {
  return (dispatch) => {
    dispatch(actions.request());
    return apiGet(endPoint)
      .then(results => results.json())
      .then(data => dispatch(actions.success(data)))
      .catch(e => dispatch(actions.failure(e.message)));
  };
};

export const postThunk = (actions, endPoint) => (body) => {
  return (dispatch, getState) => {
    console.log(body);
    dispatch(actions.request(body));
    const headers = { 'x-token': getState().auth.auth.token };
    return apiPost(endPoint, body, headers)
      .then(results => results.json())
      .then(json => dispatch(actions.success(json)))
      .catch(e => dispatch(actions.failure(e.message)));
  };
};
