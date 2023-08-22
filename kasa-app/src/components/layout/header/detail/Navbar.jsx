import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './links' // import the links array from the links.js file

const Navbar = () => {
  return (
    <nav>
      {links.map((link) => {
        return (
          <Link key={link.id} to={link.url}>
            {link.text}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar