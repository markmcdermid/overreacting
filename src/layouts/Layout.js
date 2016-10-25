import React, { Component, PropTypes } from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import Header from '../components/JukeboxApp/Header/Header';

const { push } = routeActions;

class Layout extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    token: PropTypes.string
  };
  componentWillReceiveProps(nextProps) {
    !this.props.token && nextProps.token && this.props.push('/');
    this.props.token && !nextProps.token && this.props.push('/login');
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({ auth: { token } }) => ({ token });
export default connect(mapStateToProps, { push })(Layout);
