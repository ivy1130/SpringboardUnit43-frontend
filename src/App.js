import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './App.css';

import NavBar from './NavBar';
import Routes from './Routes';

import UserContext from './UserContext';
import JoblyApi from './api';

function App() {
  let history = useHistory()

  const [user, setUser] = useState("")
  const [token, setToken] = useState("")

  const signUp = async (newUser) => {
    let token = await JoblyApi.register(newUser)
    setUser(newUser.username)
    setToken(token)
  }

  const login = async (user) => {
    let token = await JoblyApi.login(user)
    setUser(user.username)
    setToken(token)
    history.push("/")
  }

  const logout = async () => {
    await JoblyApi.logout()
    setUser("")
    setToken("")
  }

  return (
    <UserContext.Provider value={{ user, token, signUp, login, logout }}>
      <NavBar />
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
