import React, { useRef } from 'react';
import MeInput from './MeInput';

const ParentInput = () => {
    const inputRef = useRef();

    const handleFocuse = () => {
        inputRef.current.focus();
    }
  return (
    <div>
      <MeInput ref={inputRef} />
      <button onClick={handleFocuse}>click meeee</button>
    </div>
  )
}

export default ParentInput
