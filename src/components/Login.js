import React, { Component, PropTypes } from 'react';
import IoSocialGoogle from 'react-icons/lib/io/social-google';
import { connect } from 'react-redux';
import { actions as authActions } from 'redux/modules/auth/auth';
import Button from 'components/common/Button';
import Header from 'components/Header/Header';

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button
          text={this.props.didFetch ? 'Login With Google' : 'Loading...'}
          disabled={!this.props.didFetch}
          icon={<IoSocialGoogle className="icon--m" />}
          handleClick={this.props.login}
          iconLeft
        />
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { oauth: { didFetch } } }) => ({ didFetch });
export default connect(mapStateToProps, authActions)(Login);
