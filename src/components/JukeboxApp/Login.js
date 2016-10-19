import React, { Component } from 'react';
import { IoSocialGoogle } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import GoogleLogin from './common/GoogleLogin';

import { actions as authActions } from '../../redux/modules/auth';

class Login extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          className={`btn ${this.props.loggedIn && 'animate--bounce btn--success'}`}
          clientId="859078627820-qboh12tbl1vv98ii80gf6oh8dqddn67a.apps.googleusercontent.com"
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
