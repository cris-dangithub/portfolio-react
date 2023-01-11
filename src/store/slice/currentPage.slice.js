import { createSlice } from "@reduxjs/toolkit";

const currentPage = createSlice({
  name: 'currentPage',
  initialState: '/',
  reducers: {
    setCurrentPageGlobal: (state, action) => action.payload
  }
})


export const { setCurrentPageGlobal } = currentPage.actions
export default currentPage.reducer
