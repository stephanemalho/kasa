import React from 'react'

const Logo = ({ logo , altLabel, className }) => {
  return (
    <img className={className} src={logo} alt={altLabel} />
  )
}

export default Logo