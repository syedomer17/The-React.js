import React, { useContext } from 'react'
import UserContext from './UserContext'

const UserRole = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>your role is {user.role}</h1>
    </div>
  )
}

export default UserRole
