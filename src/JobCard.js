import React, { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";

const JobCard = ({ id, title, salary, equity, companyName}) => {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(function updateAppliedStatus() {
    console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  /** Apply for a job */
  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <li>
      <h4>{title}</h4>
      <p>Company: {companyName}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </li>
  )
}

export default JobCard