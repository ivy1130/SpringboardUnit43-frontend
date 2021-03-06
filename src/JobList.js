import React, { useState } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([])

  return (
    <div>
      <h1>Job List</h1>
      <SearchForm setList={setJobs} filterBy="title"/>
      {jobs.length < 1 ? <p>No jobs found.</p> : ""}
      <ul>
        {jobs.map(({ id, title, salary, equity, companyName}) => (
            <JobCard title={title} salary={salary} equity={equity} id={id} key={id} companyName={companyName}/>
        ))}
      </ul>
    </div>
  )
}

export default JobList