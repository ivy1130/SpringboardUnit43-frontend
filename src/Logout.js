import { useEffect } from "react";
import { useHistory } from "react-router-dom"

const Logout = ({logout}) => {
  const history = useHistory()
  
  useEffect(()=> {
    logout()
    history.push("/")
  })
}

export default Logout