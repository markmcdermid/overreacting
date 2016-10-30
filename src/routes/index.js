import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Admin from '../components/JukeboxApp/AdminPanel/AdminPanel';
import JukeboxApp from '../components/JukeboxApp/JukeboxApp';
import Login from '../components/JukeboxApp/Login';
import Layout from '../layouts/Layout';

export default (store) => {
  const checkAuth = (nextState, replace) => {
    store.getState().auth.auth.token && replace('/');
  };

  const requireAuth = (nextState, replace) => {
    !store.getState().auth.auth.token && replace('/login');
  };

  const requireAdmin = (nextState, replace) => {
    !store.getState().auth.auth.token && replace('/');
  };


  const JukeboxTV = () => <JukeboxApp tv />;
  return (
    <Route path="/" component={Layout}>
      <Route onEnter={requireAuth}>
        <IndexRoute component={JukeboxApp} />
        <Route path="tv" component={JukeboxTV} />
      </Route>
      <Route onEnter={requireAdmin} path="admin" component={Admin} />
      <Route onEnter={checkAuth} path="login" component={Login} />
    </Route>
  );
};
