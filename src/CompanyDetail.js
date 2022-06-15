import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import JobCard from "./JobCard";
import JoblyApi from "./api";

const CompanyDetail = () => {
  const [company, setCompany] = useState({})
  const {handle} = useParams()

  useEffect(() => {
    const getCompany = async () => {
      let res = await JoblyApi.getCompany(handle)
      setCompany(res)
    }
    getCompany()
  }, [handle])

  let { name, description, jobs=[] } = company

  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <ul>
        {jobs.map(({ id, title, salary, equity}) => (
          <JobCard title={title} salary={salary} equity={equity} key={id}/>
        ))}
      </ul>
    </div>
  )
}

export default CompanyDetail