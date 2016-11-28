import React, { Component, PropTypes } from 'react';
import IoSocialGoogle from 'react-icons/lib/io/social-google';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { actions as authActions } from 'redux/modules/auth/auth';
import Button from 'components/common/Button';
import Header from 'components/Header/Header';

class Login extends Component {
  render() {
    const btnClass = classNames({
      'btn--success animate--bounce': this.props.isAnimating
    });

    const wowClass = classNames('wow-guy', {
      'wow-guy--active': this.props.isAnimating
    });

    return (
      <div className="LoginButton">
        <Header />
        <main style={{ height: '100%' }} className="LoginButton__main flex flex--center-all">
          <Button
            className={btnClass}
            text={this.props.didFetch ? 'Login With Google' : 'Loading...'}
            disabled={!this.props.didFetch}
            icon={<IoSocialGoogle className="icon--m" />}
            handleClick={this.props.login}
            iconLeft
          />
          <div className={wowClass}>
            {this.props.isAnimating && <img src="http://i.imgur.com/Mj2iT9d.gif" alt="wow guy" />}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { auth: { isAnimating }, oauth: { didFetch } } }) => ({ didFetch, isAnimating });
export default connect(mapStateToProps, authActions)(Login);
