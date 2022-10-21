import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import InteractionsContextProvider from "./contexts/InteractionsContext";

// Imports scss files
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <InteractionsContextProvider>
    <App />
  </InteractionsContextProvider>
);
