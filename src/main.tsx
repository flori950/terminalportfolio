import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SecurityManager } from "./utils/security";

// Initialize security checks
SecurityManager.initialize();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
