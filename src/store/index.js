import { configureStore } from "@reduxjs/toolkit";
import changeMode from "./slice/changeMode.slice";
import currentPage from "./slice/currentPage.slice";

export default configureStore({
  reducer: {
    changeMode,
    currentPage
  }
})