import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink exact to="/jobs">
        Jobs
      </NavLink>
    </nav>
  )
}

export default NavBar