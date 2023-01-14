import React, { useState } from "react";
import User from "./User";
import Test from "../Test";

const Users = ({ users, comp = "" }) => {
  const [render, setRender] = useState(false);

  // console.log("users comp");

  return (
    <div className="flex items-center flex-wrap">
      {users?.map((item, i) => (
        <User key={i} user={item} />
      ))}
      {/* <Test /> */}
      {comp}
      <button
        className="mx-2 p-2 outline-none bg-green-400 rounded-md"
        onClick={() => setRender((prev) => !prev)}
      >
        Render
      </button>
    </div>
  );
};

export default Users;
