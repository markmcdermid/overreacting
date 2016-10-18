import React, { Component }from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/App.scss';

import JukeboxApp from './components/JukeboxApp/JukeboxApp';
import MainLayout from './layouts/MainLayout';

const JukeboxTV = () => <JukeboxApp tv />;

class AppWrapper extends Component {
  state = { loggedIn: false }
  checkAuth = (ns, replace) => this.state.loggedIn && replace('/');
  requireAuth = (ns, replace) => !this.state.loggedIn && replace('/login');
  requireAdmin = (ns, replace) => !this.state.admin && replace('/');

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout} >
          <IndexRoute onEnter={this.requireAuth} component={JukeboxApp} />
          <Route path="login" onEnter={this.checkAuth} component={JukeboxTV} />
          <Route path="tv" onEnter={this.requireAuth} component={JukeboxTV} />
          <Route path="admin" onEnter={this.requireAdmin} component={JukeboxApp} />
        </Route>
      </Router>
    )
  }
}

export default AppWrapper;
