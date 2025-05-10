import React, { useEffect } from "react";

const withTimer = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const now = new Date().toLocaleTimeString();
      console.log(`[withTimer] Component mounted at: ${now}`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withTimer;
