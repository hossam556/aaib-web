import React from "react";
import router from "next/router";
import { useFormik } from "formik";
import axiosPrivate from "../axiosPrivate";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      user: "",
      pwd: "",
    },
    onSubmit: (values) => {
      axiosPrivate
        .post("/register", values)
        .then(() => router.push("/login"))
        .catch((err) => err);
    },
  });

  //   console.log(formik.values);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div>
        <div className="mb-8">
          <button
            className="px-3 py-2 mt-3 text-black bg-white rounded-md"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
        <div className="h-[400px] w-[300px] bg-gray-200 rounded-md p-8">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              className="w-full h-12 px-1 mb-3 border rounded-md outline-none focus:outline-none"
              id="user"
              name="user"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor="lastName">Password</label>
            <input
              className="w-full h-12 px-1 border rounded-md outline-none focus:outline-none"
              id="pwd"
              name="pwd"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <button
              type="submit"
              className="px-3 py-2 mt-3 text-white bg-black rounded-md"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
