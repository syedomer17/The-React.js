import React, { useState } from 'react'

const LikeButton = () => {
    const [count, setCount] = useState(0);
  return ( 
    <div>
      <p>likes {count}</p>
      <button onClick={()=> setCount(count + 1)}>Like</button>
    </div>
  )
}

export default LikeButton
