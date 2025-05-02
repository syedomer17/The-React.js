import React from 'react'
import { use } from 'react';
import { useParams } from 'react-router-dom'

const User = () => {
    const userName = useParams();
  return (
    <div>
      <h1>User page</h1>
      <p>UserName from url : <strong>{userName}</strong></p>
    </div>
  )
}

export default User
