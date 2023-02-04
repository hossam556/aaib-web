import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   isAuthenticated: false,
  token: "",
  isAuthenticated:
    typeof window !== "undefined" && localStorage.getItem("token")
      ? true
      : false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isAuthenticated = true;
      state.token = "testToken";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAction } = loginSlice.actions;

export default loginSlice.reducer;
