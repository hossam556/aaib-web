import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

const AddUser = ({ users, setUsers }) => {
  const [userName, setName] = useState("");

  const addUser = async () => {
    const body = {
      name: userName,
    };
    try {
      const { data: user } = await axios.post(
        "http://localhost:3000/api/users",
        body
      );
      let newUsers = [...users];
      newUsers.push(user);
      setUsers(newUsers);
      setName("");
    } catch (err) {
      console.log("entered error");
      console.log(err);
    }
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        value={userName}
        placeholder="write userName..."
        className="p-3 border border-blue-400 rounded-md outline-none"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="p-3 mx-2 my-2 bg-green-400 rounded-md outline-none"
        onClick={addUser}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
