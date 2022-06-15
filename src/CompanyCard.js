import React from "react";
import { Link } from "react-router-dom"

const CompanyCard = ({ handle, name, description }) => {
  return (
    <li>
      <h3><Link to={`/companies/${handle}`}>{name}</Link></h3>
      <p>{description}</p>
    </li>
  )
}

export default CompanyCard