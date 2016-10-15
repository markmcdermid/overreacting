import React from 'react';
import { Link }from 'react-router';
import { IoIosMonitorOutline, IoIosLockedOutline } from 'react-icons/lib/io';
import { MdPlaylistAdd } from 'react-icons/lib/md';

import NavItem from './NavItem';

const Nav = ({ currentRoute }) => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <NavItem active={currentRoute === '/'}>
          <Link className="a--reset" to="/">
            <MdPlaylistAdd />
          </Link>
        </NavItem>
        <NavItem active={currentRoute === '/tv'}>
          <Link className="a--reset" to="/tv">
            <IoIosMonitorOutline />
          </Link>
        </NavItem>
        <NavItem active={currentRoute === '/admin'}>
          <Link className="a--reset" to="/admin">
            <IoIosLockedOutline />
          </Link>
        </NavItem>
      </ul>
    </nav>
  );
}
export default Nav;
