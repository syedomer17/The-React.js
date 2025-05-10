import React from "react";

const SimpleComponent = ({ mountTime }) => {
  return (
    <div className="p-4 bg-green-100 rounded text-center">
      <h2 className="text-xl font-semibold mb-2">🕒 Simple Component Loaded</h2>
      <p className="text-gray-700">Mounted at: <strong>{mountTime}</strong></p>
    </div>
  );
};

export default SimpleComponent;
