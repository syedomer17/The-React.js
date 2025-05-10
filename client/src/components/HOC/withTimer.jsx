import React, { useEffect, useState } from "react";

const withTimer = (WrappedComponent) => {
  return (props) => {
    const [mountTime, setMountTime] = useState("");

    useEffect(() => {
      const now = new Date().toLocaleTimeString();
      console.log(`[withTimer] Component mounted at: ${now}`);
      setMountTime(now);
    }, []);

    return <WrappedComponent {...props} mountTime={mountTime} />;
  };
};

export default withTimer;
