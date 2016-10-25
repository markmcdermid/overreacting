import React from 'react';
import { Link } from 'react-router';
import { IoIosMonitorOutline, IoIosLockedOutline } from 'react-icons/lib/io';
import { MdPlaylistAdd } from 'react-icons/lib/md';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__items">
      <li className="nav__item">
        <Link activeClassName="nav__item__link--active" className="a--reset" to="/play">
          <MdPlaylistAdd />
        </Link>
      </li>
      <li className="nav__item">
        <Link activeClassName="nav__item__link--active" className="a--reset" to="/tv">
          <IoIosMonitorOutline />
        </Link>
      </li>
      <li className="nav__item">
        <Link activeClassName="nav__item__link--active" className="a--reset" to="/admin">
          <IoIosLockedOutline />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
