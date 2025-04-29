// ColorChanger.jsx
import React, { useState } from 'react';

const ColorChanger = () => {
  const [text, setText] = useState('Default color');

  const handleClick = () => {
    setText('Color changed to blue!');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
