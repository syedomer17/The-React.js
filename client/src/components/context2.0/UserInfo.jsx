import React, { useContext } from 'react';
import { UserCon } from './UserCon';

const UserInfo = () => {
  const { user } = useContext(UserCon);

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">User Info</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
};

export default UserInfo;
