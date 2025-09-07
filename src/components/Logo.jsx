import React from 'react'
import logo from '../assets/logo.png'

const Logo = ({className}) => {
  return (
    <div>
      <img src={logo} alt='logo' className={`${className} object-contain`}/>
    </div>
  )
}

export default Logo
