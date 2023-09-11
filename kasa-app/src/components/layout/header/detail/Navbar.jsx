import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { links } from './links';

const Navbar = () => {

  const { pathname } = useLocation();

  return (
    <nav>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.url}
          className={pathname === link.url ? 'active-link' : ''}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar