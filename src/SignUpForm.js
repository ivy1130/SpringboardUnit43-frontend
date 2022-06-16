import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import "./SignUpForm.css"

const SignUpForm = () => {
  const { signUp } = useContext(UserContext)
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
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
    signUp(formData)
  }

  return (
    <div>
      <h1>Sign Up Form</h1>
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
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
  </div>
  )
}

export default SignUpForm