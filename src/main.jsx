import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./components/context/contextprovider.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ContextProvider>
  </BrowserRouter>
);
