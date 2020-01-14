import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <div className="NavBar">
    <NavLink
      className="NavBar__NavItem"
      activeClassName="NavBar__NavItem--active"
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      className="NavBar__NavItem"
      activeClassName="NavBar__NavItem--active"
      to="/tokens"
    >
      Tokens
    </NavLink>
    <NavLink
      className="NavBar__NavItem"
      activeClassName="NavBar__NavItem--active"
      to="/badges"
    >
      Badges
    </NavLink>
  </div>
)

export default NavBar
