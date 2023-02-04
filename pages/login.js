import React from "react";
import router from "next/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/reducers/login/login";
import axiosPrivate from "../axiosPrivate";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const formik = useFormik({
    initialValues: {
      user: "",
      pwd: "",
    },
    onSubmit: (values) => {
      axiosPrivate
        .post("/auth", values)
        .then((res) => {
          console.log(res.data?.accessToken);
          localStorage.setItem("token", res.data?.accessToken);
          dispatch(loginAction());
          router.push("/home");
        })
        .catch((err) => err);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div>
        <div className="mb-8">
          <button
            className="px-3 py-2 mt-3 text-black bg-white rounded-md"
            onClick={() => {
              //   dispatch(loginAction(true));
              router.push("/register");
            }}
          >
            SignUp
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
