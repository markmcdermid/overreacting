import React, { Component, PropTypes } from 'react';
import { IoSocialGoogle, IoIosRefresh } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import GoogleLogin from './common/GoogleLogin';
import { actions as authActions } from '../../redux/modules/auth';

// TODO: Add x-token with the token to all auth requests
// (authresult.idToken) => x-token

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    loginFailure: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  handleSuccess = (t) => {
    localStorage.setItem('id_token', t.tokenId);
    localStorage.setItem('name', t.profileObj.name);
    this.props.loginSuccess(t);
  }

  render() {
    return (
      <div>
        <GoogleLogin
          className="btn"
          clientId="147711705910-gks81l3kpnuaotd22jn3vcdgobajsdgu.apps.googleusercontent.com"
          onRequest={this.props.loginRequest}
          onSuccess={t => this.handleSuccess(t)}
          onFailure={e => this.props.loginFailure(e)}
        >
          { this.props.isFetching
            ? <IoIosRefresh className="icon--s animate--spin" />
            : <span><IoSocialGoogle className="icon--s" /><span>Login With Google</span></span>}
        </GoogleLogin>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching });
export default connect(mapStateToProps, authActions)(Login);
