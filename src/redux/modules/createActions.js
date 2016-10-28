
const toUnderscore = function (str) {
  return str.replace(/([A-Z])/g, $1 => `_${$1}`).toUpperCase();
};

export default function (thunkName) {
  // Actions
  const REQUEST = `${toUnderscore(thunkName)}_REQUEST`;
  const SUCCESS = `${toUnderscore(thunkName)}_SUCCESS`;
  const FAILURE = `${toUnderscore(thunkName)}_FAILURE`;

  // Action Creators
  const requestTitle = `${thunkName}Request`;
  const request = payload => ({ type: REQUEST, payload });
  const successTitle = `${thunkName}Success`;
  const success = data => ({ type: SUCCESS, data });
  const failureTitle = `${thunkName}Failure`;
  const failure = error => ({ type: FAILURE, error });

  const constants = {
    REQUEST,
    SUCCESS,
    FAILURE
  };

  const actionCreators = {
    request,
    success,
    failure,
  };

  const namedActions = {
    [requestTitle]: request,
    [successTitle]: success,
    [failureTitle]: failure
  };

  return { actionCreators, constants, namedActions };
}
