import React from "react";

const User = ({ user }) => {
  return (
    <div className="p-8 rounded-md bg-gray-200 text-black mx-3">
      <p>{user.name}</p>
    </div>
  );
};

export default User;
