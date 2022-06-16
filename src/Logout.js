import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import UserContext from "./UserContext";

const Logout = () => {
  const history = useHistory()
  const { logout } = useContext(UserContext)
  
  useEffect(()=> {
    logout()
    history.push("/")
  })
}

export default Logout