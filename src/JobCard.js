import React from "react";

const JobCard = ({ title, salary, equity}) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </li>
  )
}

export default JobCard