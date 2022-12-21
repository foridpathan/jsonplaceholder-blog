import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  users: [],
  comments: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataByKey: (state, action) => {
      state[action.payload.key] = action.payload.data;
    },
  },
});

export const { setDataByKey } = dataSlice.actions;

export const selectData = (state) => state.data;

export default dataSlice.reducer;
