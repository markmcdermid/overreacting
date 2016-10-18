import React, { Component } from 'react';

import Header from '../components/JukeboxApp/Header/Header';

class Layout extends Component {
  render() {
    console.log(this.props);
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

export default Layout;
