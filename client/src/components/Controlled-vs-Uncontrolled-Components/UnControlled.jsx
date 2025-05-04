import React, { useRef } from 'react'

const UnControlled = () => {
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default UnControlled
