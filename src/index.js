import React from "react";
import { render } from "react-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import App from "./App";

// Initialize Firebase
initializeApp(firebaseConfig);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
