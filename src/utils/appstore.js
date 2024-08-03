import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "./severSlice"

const store = configureStore({
  reducer:{
    server:serverReducer
  }
})

export default store;