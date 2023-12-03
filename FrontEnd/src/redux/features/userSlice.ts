import { createSlice } from "@reduxjs/toolkit";
import { initialUserStateStore } from "../initialUserState";

const userSlice = createSlice({
    name: "user",
    initialState: initialUserStateStore,
    reducers: {
  
    },
  });