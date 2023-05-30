import { createSlice } from "@reduxjs/toolkit";

const appState = createSlice({
  name: "app",
  initialState: {
    count: 0,
  },
  reducers: {
    plusCount(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const { plusCount } = appState.actions;
export default appState.reducer;
