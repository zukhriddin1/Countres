import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import "./index.css";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App></App>
      </Provider>
    ),
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
