// src/index.js
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 👈 HashRouter
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
