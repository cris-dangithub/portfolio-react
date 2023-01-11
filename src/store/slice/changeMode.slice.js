import { createSlice } from "@reduxjs/toolkit";

const changeModeSlice = createSlice({
  name: 'changeMode',
  initialState: false,
  reducers: {
    changingPage: state => true,
    pageLoaded: state => false
  }
})

export const { changingPage, pageLoaded } = changeModeSlice.actions
export default changeModeSlice.reducer

