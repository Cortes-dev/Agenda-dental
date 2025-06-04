// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import FondoAnimado from "./components/Global/FondoAnimado";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FondoAnimado />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
