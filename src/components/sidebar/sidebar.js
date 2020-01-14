import './SideBar.css'
import React from 'react'
import Logo from './logo'
import NavBar from './navbar'
import bannerImg from '../../assets/images/banner.png'

const SideBar = () => (
  <div className="SideBar">
    <Logo />
    <NavBar />
    <div className="SideBar__Banner">
      <a href="https://tokens.kleros.io/">
        <img src={bannerImg} alt="Banner" />
      </a>
    </div>
  </div>
)

export default SideBar
