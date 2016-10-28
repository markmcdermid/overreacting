import React, { Component, PropTypes } from 'react';
import { IoSocialGoogle, IoIosRefresh } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import { actions as authActions } from '../../redux/modules/auth/auth';
import Button from './common/Button';

class Login extends Component {

  handleClick = () => {
    console.log('handle');
    this.props.login();
  }
  render() {
    return (
      <div>
        <Button handleClick={this.handleClick} text="Login With Google" />
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching });
export default connect(mapStateToProps, authActions)(Login);
