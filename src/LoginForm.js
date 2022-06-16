import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import UserContext from "./UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext)
  const INITIAL_STATE = {
    username: "",
    password: "",
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
    ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  return (
    <div>
      <h1>Log In</h1>
      <h3>Don't have an account? <Link to="/signup">Sign up here!</Link></h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="username">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
  </div>
  )
}

export default LoginForm