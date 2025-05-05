import React, { useContext } from 'react';
import { UserCon } from './UserCon';

const ToggleLogin = () => {
  const { user, toggleLogin } = useContext(UserCon);

  return (
    <button
      onClick={toggleLogin}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {user.isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default ToggleLogin;
