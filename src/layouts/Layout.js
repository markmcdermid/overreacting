import React, { Component, PropTypes } from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';

import { actions as oauthActions } from '../redux/modules/auth/oauth';
const { push } = routeActions;

class Layout extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    token: PropTypes.string
  };

  constructor(props) {
    super(props);
    props.setupGoogleLogin();
  }

  componentWillReceiveProps(nextProps) {
    !this.props.token && nextProps.token && this.props.push('/');
    this.props.token && !nextProps.token && this.props.push('/login');
  }

  render() {
    return this.props.children;
  }
}
const mapStateToProps = ({ auth: { oauth: { didFetch }, auth: { token } } }) => ({ token, didFetchOAuth: didFetch });
const mapDispatchToProps = {
  push,
  ...oauthActions
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
