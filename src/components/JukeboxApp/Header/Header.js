import React from 'react';
import Nav from '../common/Nav';

const Header = ({ currentRoute }) => (
  <header className="hf hf--header">
    <div className="hf__inner">
      <Nav currentRoute={currentRoute} />
      <h1 className="h1 h--no-margin">Jukebox</h1>
    </div>
  </header>
);

export default Header;
