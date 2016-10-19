import React from 'react';
import { Route, IndexRoute } from 'react-router';
import JukeboxApp from '../components/JukeboxApp/JukeboxApp';
import Login from '../components/JukeboxApp/Login';
import Layout from '../layouts/Layout';

export default (store) => {
  const checkAuth = (nextState, replace) => {
    const state = store.getState();
    state.auth.isAuthenticated && replace('/');
  };

  const requireAuth = (nextState, replace) => {
    const state = store.getState();
    !state.auth.isAuthenticated && replace('/login');
  };

  return (
    <Route path="/" component={Layout}>
      <Route onEnter={requireAuth}>
        <IndexRoute component={JukeboxApp} />
      </Route>
      <Route onEnter={checkAuth}>
        <Route path="login" component={Login} />
      </Route>
    </Route>
  );
}
