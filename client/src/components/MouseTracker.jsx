import React, { useEffect, useState } from 'react'

const MouseTracker = () => {
    const [position ,setPosition ] = useState({x:0,y:0});

    useEffect(()=>{
        const handleMouseMove = (event) => {
            setPosition({
              x: event.clientX,
              y: event.clientY,
            });
          };
          return () => {
            window.addEventListener("mousemove",handleMouseMove)
          }
    },[])
  return (
    <div>
            <p>X: {position.x}</p>
            <p>Y: {position.y}</p>
    </div>
  )
}

export default MouseTracker
