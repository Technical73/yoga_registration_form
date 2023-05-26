import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { mainStore } from "./Store/mainStore.js";
import { AllProducts } from "./Features/apiSlice.js";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <ApiProvider api={AllProducts}>
        <ToastContainer />
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
