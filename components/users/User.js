import React from "react";

const User = ({ user }) => {
  return (
    <div className="w-[100px] h-[100px] flex items-center justify-center text-black bg-gray-200 rounded-md">
      <p>{user.name}</p>
    </div>
  );
};

export default User;
