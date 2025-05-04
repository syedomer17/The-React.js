import React, { useState } from 'react'

const Controlled = () => {
    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
    }
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Controlled
