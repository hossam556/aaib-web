import React from "react";

export const useFetch = (path) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
};
