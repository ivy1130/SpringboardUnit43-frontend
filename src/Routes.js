import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
      <Route exact path="/companies"> 
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle"> 
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs"> 
        <JobList />
      </Route>
    </Switch>
  )
}

export default Routes