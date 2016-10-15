import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import JukeboxApp from './components/JukeboxApp/JukeboxApp';
import './styles/App.scss';

const JukeboxTV = p => (
  <JukeboxApp {...p} tv />
);

export default () => (
  <Router history={browserHistory}>
    <Route path="/tv" component={JukeboxTV} />
    <Route path="*" component={JukeboxApp} />
  </Router>
);
