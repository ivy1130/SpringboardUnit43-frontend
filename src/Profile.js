import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import JoblyApi from "./api";

const Profile = () => {
  const { user, setUser } = useContext(UserContext)

  const INITIAL_STATE = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
    ...formData, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser = await JoblyApi.saveProfile(username, profileData)

    setFormData(f => ({ ...f, password: "" }))
    setUser(updatedUser)
  }

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <p>{formData.username}</p>
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
        <label htmlFor="username">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />        
        <button>Update</button>
      </form>
  </div>
  )

}

export default Profile