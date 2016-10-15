import React from 'react';

const NavItem = ({ children, active }) => (
  <li className={`nav__item ${active ? 'nav__item--active' : ''}`}>{children}</li>
);

export default NavItem;
