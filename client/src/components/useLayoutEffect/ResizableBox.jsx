import React, { useRef, useState, useLayoutEffect } from "react";

const ResizableBox = () => {
  const boxRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setSize({ width: Math.round(width), height: Math.round(height) });
    };

    updateSize(); // initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="p-6 flex flex-col items-center">
      <div
        ref={boxRef}
        className="bg-blue-300 w-[60vw] h-[30vh] rounded shadow-md flex items-center justify-center text-white text-xl"
      >
        width : {size.width}px height : {size.height}px
      </div>
      <p className="mt-4 text-sm text-gray-700">Resize the window to see it update</p>
    </div>
  );
};

export default ResizableBox;
