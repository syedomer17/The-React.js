import React from 'react'
import {useNavigate} from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default Profile
