import { useState, useRef, useEffect } from 'react';


const Ref = () => {
  const [name, setName] = useState('');
  const inputRef = useRef(null);             // for focusing the input
  const prevNameRef = useRef('');            // for tracking previous name

  // Update previous name after every change
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div className="p-4 space-y-4">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border px-4 py-2 rounded"
      />

      <button
        onClick={focusInput}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Focus Input
      </button>

      <p>👤 Previous Name: <strong>{prevNameRef.current}</strong></p>
    </div>
    </div>
  )
}

export default Ref
