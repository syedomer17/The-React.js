import React, { createContext, useState } from 'react';

export const UserCon = createContext();

export const Userprovider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    isLoggedIn: false,
  });

  const toggleLogin = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isLoggedIn: !prevUser.isLoggedIn,
    }));
  };

  return (
    <UserCon.Provider value={{ user, toggleLogin }}>
      {children}
    </UserCon.Provider>
  );
};
