import React, { Component } from 'react';
import { IoSocialGoogle } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import GoogleLogin from './common/GoogleLogin';

import { actions as authActions } from '../../redux/modules/auth';

// TODO: Add x-token with the token to all auth requests
// (authresult.idToken) => x-token

class Login extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          className={`btn ${this.props.loggedIn && 'animate--bounce btn--success'}`}
          clientId="147711705910-gks81l3kpnuaotd22jn3vcdgobajsdgu.apps.googleusercontent.com"
          onRequest={this.props.loginRequest}
          onSuccess={this.props.loginSuccess}
          onFailure={this.props.loginFailure}
        >
          <IoSocialGoogle className="icon--s" /> <span>Login With Google</span>
        </GoogleLogin>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ loggedIn: isAuthenticated});
export default connect(mapStateToProps, authActions)(Login);
