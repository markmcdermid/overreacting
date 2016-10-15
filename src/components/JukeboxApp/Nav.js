import React from 'react';
import { Link }from 'react-router';
import { IoIosMonitorOutline, IoIosLockedOutline } from 'react-icons/lib/io';
import { MdPlaylistAdd } from 'react-icons/lib/md';

import NavItem from './NavItem';

const Nav = ({ currentRoute }) => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <NavItem><Link
          className={`a--reset nav__link ${currentRoute === '/' ? 'nav__link--active' : ''}`  }
          to="/"
        >
          <MdPlaylistAdd />
        </Link>
        </NavItem>
        <NavItem>
          <Link
            className={`a--reset nav__link ${currentRoute === '/tv' ? 'nav__link--active' : ''}`  }
            to="/tv"
          >
            <IoIosMonitorOutline />
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className={`a--reset nav__link ${currentRoute === '/admin' ? 'nav__link--active' : ''}`  }
            to="/admin"
          >
            <IoIosLockedOutline />
          </Link>
        </NavItem>
      </ul>
    </nav>
  );
}
export default Nav;
