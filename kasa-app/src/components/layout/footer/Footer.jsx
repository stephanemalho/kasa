import React from 'react'
import { logosvg } from '../../../assets/images'
import Logo from '../../ReusableUI/Logo'
import Copyright from './detail/Copyright'
import { mainLogo } from '../../../variables/constants'

const Footer = () => {
  return (
    <div className="footer">
      <Logo logo={logosvg} altlabel={mainLogo.alt} />
      <Copyright />
    </div>
  )
}

export default Footer