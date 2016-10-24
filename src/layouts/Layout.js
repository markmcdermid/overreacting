import React, { Component } from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import Header from '../components/JukeboxApp/Header/Header';

class Layout extends Component {
  componentWillReceiveProps(nextProps) {
    const { push } = this.props;
    (!this.props.token && nextProps.token) && push('/');
    (this.props.token && !nextProps.token) && push('/login');
  }

  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <div>
        <Header currentRoute={pathname} />
        <main>
          { children }
        </main>
      </div>
    )
  }
}
const mapStateToProps = ({ auth: { token } }) => ({ token });
const mapDispatchToProps = { push: routeActions.push };
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
