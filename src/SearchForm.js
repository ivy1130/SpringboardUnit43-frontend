import React, { useEffect, useState } from "react";
import JoblyApi from "./api";


const SearchForm = ({ setList, filterBy }) => {
  const INITIAL_STATE = {
    [filterBy]: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE)
  let res

  useEffect(() => {
    const filterRes = async () => {
      if (filterBy === "name") {
        res = await JoblyApi.getCompanies(formData)
      }
      else if (filterBy === "title") {
        res = await JoblyApi.getJobs(formData)
      }
      setList(res)
    }
    filterRes()
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
    ...formData, [name]: value
    }))
  }

  return (
    <form>
      <label htmlFor={filterBy}>Search:</label>
      <input
        id={filterBy}
        type="text"
        name={filterBy}
        value={formData[filterBy]}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchForm