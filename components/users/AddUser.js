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
      //   console.log(res.users);
    } catch (err) {
      console.log("entered error");
      console.log(err);
    }
    // try {
    //   const res = await fetch("http://localhost:3000/api/users", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const user = await res.json();
    //   let newUsers = [...users];
    //   newUsers.push(user);
    //   setUsers(newUsers);
    //   setName("");
    //   console.log("succeed");
    // } catch (err) {
    //   console.log("entered error");
    //   console.log(err);
    // }
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        value={userName}
        placeholder="write userName..."
        // key={}
        className="p-3 border border-blue-400 rounded-md outline-none"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="mx-2 p-3 outline-none bg-green-400 rounded-md my-2"
        onClick={addUser}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
