import React, { Component, PropTypes } from 'react';
import { IoSocialGoogle, IoIosRefresh } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import { actions as authActions } from '../../redux/modules/auth/auth';
import Button from './common/Button';

class Login extends Component {
  render() {
    return (
      <Button
        text={this.props.didFetch ? 'Login With Google' : 'Loading...'}
        disabled={!this.props.didFetch}
        icon={<IoSocialGoogle className="icon--m" />}
        handleClick={this.props.login}
        iconLeft
      />
    );
  }
}

const mapStateToProps = ({ auth: { oauth: { didFetch } } }) => ({ didFetch });
export default connect(mapStateToProps, authActions)(Login);
