import React, { useState } from "react";
import CompanyCard from "./CompanyCard.js";
import SearchForm from "./SearchForm.js";

const CompanyList = () => {
  const [companies, setCompanies] = useState([])

  return (
    <div>
      <h1>Company List</h1>
      <SearchForm setList={setCompanies} filterBy="name"/>
      {companies.length < 1 ? <p>No companies found.</p> : ""}
      <ul>
        {companies.map(({ handle, name, description }) => (
          <CompanyCard handle={handle} name={name} description={description} key={handle}/>
        ))}
      </ul>
    </div>
  )
}

export default CompanyList