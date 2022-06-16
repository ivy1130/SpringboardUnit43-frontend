import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage';
import { decodeToken } from "react-jwt"
import './App.css';

import NavBar from './NavBar';
import Routes from './Routes';
import UserContext from './UserContext';
import JoblyApi from './api';

function App() {
  let history = useHistory()

  const [user, setUser] = useState(null)
  const [token, setToken] = useLocalStorage("");

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        let { username } = decodeToken(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setUser(currentUser);
    }}
    getCurrentUser();
  }, [token]);

  const signUp = async (newUser) => {
    let token = await JoblyApi.register(newUser)
    setUser(newUser.username)
    setToken(token)
  }

  const login = async (user) => {
    let token = await JoblyApi.login(user)
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
