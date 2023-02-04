import React, { useState } from "react";
import User from "./User";
import Test from "../Test";

const Users = ({ users, comp = "" }) => {
  const [render, setRender] = useState(false);

  // console.log("users comp");

  return (
    <div className="flex flex-wrap items-center gap-5">
      {users?.map((item, i) => (
        <User key={i} user={item} />
      ))}
      {/* <Test /> */}
      {comp}
      <button
        className="p-2 mx-2 bg-green-400 rounded-md outline-none"
        onClick={() => setRender((prev) => !prev)}
      >
        Render
      </button>
    </div>
  );
};

export default Users;
