import { configureStore } from "@reduxjs/toolkit";
import appState from "./appState";

export const store = configureStore({
  reducer: {
    app: appState,
  },
});
