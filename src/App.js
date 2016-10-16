import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import JukeboxApp from './components/JukeboxApp/JukeboxApp';
import './styles/App.scss';

const JukeboxTV = props => (
  <JukeboxApp {...props} tv/>
);

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={JukeboxApp}/>
    <Route path="/tv" component={JukeboxTV}/>
    <Route path="/admin" component={JukeboxTV}/>
    <Route path="*" component={JukeboxApp}/>
  </Router>
);
