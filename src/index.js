import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// 2. create user reducer function -- reducers/auth.js
// 3. combine multiple reducers -- reducers/index.j
// 4. create redux store
const store = configureStore({
  reducer: rootReducer,
});

// 5. provice redux store to the entire app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
