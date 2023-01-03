import React from "react";
import { useFetch } from "../utils/useFetch";

const Home = ({ data }) => {
  console.log(data);
  return <div>Home</div>;
};

export default Home;

export async function getServerSideProps(context) {
  const res = await useFetch("/users");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
