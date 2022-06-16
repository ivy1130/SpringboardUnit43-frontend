import React, { useContext } from "react";
import UserContext from "./UserContext";

const Home = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>{user ? `Welcome back ${user.username}!` : "Welcome to Jobly!"}</h1>
      <h2>{user ? "Use the links above to explore our site." : "Please sign up or log in to access our listings."}</h2>
    </div>
  )
}

export default Home