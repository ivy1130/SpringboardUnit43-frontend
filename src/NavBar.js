import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import UserContext from "./UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext)

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
      {!user ? (
        <>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
        </>) : ""}
      {user ? (
        <>
        Logged in as: <span>{user}</span>
        <NavLink exact to="/logout">
          Logout
        </NavLink>
        </>) : ""}
    </nav>
  )
}

export default NavBar