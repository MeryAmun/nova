import React from 'react'
import { navbarLogo } from '../../assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__navbar-logo">
        <img src={navbarLogo} alt="" />
      </div>
    </div>
  )
}

export default Navbar