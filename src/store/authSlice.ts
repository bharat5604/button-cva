import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  userData: any;
}
const isClient = typeof localStorage !== "undefined";
const user = isClient ? localStorage.getItem("userData") : "";

const initialState: AuthState = {
  userData:
    isClient && user ? JSON.parse(localStorage.getItem("userData") ?? "") : {},
};

const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setAuth: (state: any, action) => {
      state.userData = action?.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
