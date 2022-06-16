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
  const [applicationIds, setApplicationIds] = useState(new Set([]))
  console.log(user)

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
    setUser("")
    setToken("")
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(user.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <UserContext.Provider value={{ user, setUser, hasAppliedToJob, applyToJob }}>
      <NavBar />
      <Routes login={login} signup={signUp} logout={logout}/>
    </UserContext.Provider>
  );
}

export default App;
