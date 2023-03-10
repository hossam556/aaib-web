import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { logoutAction } from "../store/reducers/login/login";

const Home = () => {
  const [employees, setEmployees] = useState(null);

  const axiospriv = useAxiosPrivate();

  const dispatch = useDispatch();

  const router = useRouter();

  // useEffect(() => {

  // }, []);

  const getEmployess = () => {
    axiospriv
      .get("/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => err);
  };

  const LogoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  };

  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  // if (!isAuthenticated) {
  //   router?.replace("/login");
  // }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold text-red-500 bg-green-300">
        Hello user
        {isAuthenticated && (
          <div className="w-full mt-10 text-2xl text-center text-blue-500">
            This appear for Hossam Salem only
          </div>
        )}
        <button
          onClick={getEmployess}
          className="px-5 py-4 mt-10 text-lg text-center text-white bg-purple-500 rounded-md"
        >
          Get your emploees
        </button>
        <div className="flex items-center mt-10">
          {employees &&
            employees.map((item) => (
              <div
                className="p-4 mx-2 text-lg text-black bg-orange-400 rounded-md"
                key={item.id}
              >
                {item.firstname}
              </div>
            ))}
        </div>
        <button
          onClick={LogoutHandler}
          className="px-5 py-4 mt-10 text-lg text-center text-white bg-purple-500 rounded-md"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
