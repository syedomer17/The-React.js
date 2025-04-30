import React, { useState } from 'react'

const MovieTicket = () => {
    const [age,setAge] = useState(null);

  return (
    <div>
      <h1>Movie Ticket Checker</h1>
      <input type="number" placeholder='Enter your age' onChange={(e)=>{
        return setAge(Number(e.target.value));
      }} />
      {age !== null && (
        <p>{age >= 18 ? "You can watch the movie 🍿" : "Sorry, you're too young ❌"}</p>
      )}
    </div>
  )
}

export default MovieTicket
