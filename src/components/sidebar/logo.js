import './Logo.css'
import React from 'react'
import logoImg from '../../assets/images/logo.svg'

const Logo = () => (
  <div className="Logo">
    <div className="Logo__Image">
      <img src={logoImg} alt="Logo" />
    </div>
    <div className="Logo__Heading">
      <p>T2CR</p>
    </div>
  </div>
)

export default Logo
