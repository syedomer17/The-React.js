import React, { useContext } from 'react'
import UserContext from './UserContext'

const UserGreeting = () => {
    const user = useContext(UserContext);
  return (
    <div>
       <h2>Welcome, {user.name}!</h2>;
    </div>
  )
}

export default UserGreeting
