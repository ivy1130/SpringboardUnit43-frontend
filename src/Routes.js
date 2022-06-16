import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Logout from "./Logout";
import PrivateRoute from "./PrivateRoutes";
import Profile from "./Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
      <PrivateRoute exact path="/companies"> 
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle"> 
        <CompanyDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs"> 
        <JobList />
      </PrivateRoute>
      <Route exact path="/login"> 
        <LoginForm />
      </Route>
      <Route exact path="/signup"> 
        <SignUpForm />
      </Route>
      <Route exact path="/logout"> 
        <Logout />
      </Route>
      <PrivateRoute exact path="/profile"> 
        <Profile />
      </PrivateRoute>
    </Switch>
  )
}

export default Routes