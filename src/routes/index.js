import React from 'react';
import { Route, IndexRoute } from 'react-router';
import JukeboxApp from '../components/JukeboxApp/JukeboxApp';
import Login from '../components/JukeboxApp/Login';
import Layout from '../layouts/Layout';

export default (store) => {
  const checkAuth = (nextState, replace) => {
    const state = store.getState();
    state.auth.token && replace('/');
  };

  const requireAuth = (nextState, replace) => {
    const state = store.getState();
    !state.auth.token && replace('/login');
  };

  const JukeboxTV = () => <JukeboxApp tv />;

  return (
    <Route path="/" component={Layout}>
      <Route onEnter={requireAuth}>
        <IndexRoute component={JukeboxApp} />
        <Route path="tv" component={JukeboxTV} />
      </Route>
      <Route onEnter={checkAuth}>
        <Route path="login" component={Login} />
      </Route>
    </Route>
  );
};
