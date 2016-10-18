import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/App.scss';

import JukeboxApp from './components/JukeboxApp/JukeboxApp';
import Layout from './layouts/Layout';

const JukeboxTV = () => <JukeboxApp tv />;

export default class App extends Component {
  state = { loggedIn: false }
  checkAuth = (ns, replace) => this.state.loggedIn && replace('/');
  requireAuth = (ns, replace) => !this.state.loggedIn && replace('/login');
  requireAdmin = (ns, replace) => !this.state.admin && replace('/');
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={JukeboxApp} />
          <Route path="login" onEnter={this.checkAuth} component={JukeboxTV} />
          <Route path="tv" onEnter={this.requireAuth} component={JukeboxTV} />
          <Route path="admin" onEnter={this.requireAdmin} component={JukeboxApp} />
        </Route>
      </Router>
    );
  }
}
