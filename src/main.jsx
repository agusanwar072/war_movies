import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Index from "./componen/Index.jsx";
import { WatchProvider } from "./componen/contexts/WatchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WatchProvider>
        <App />
      </WatchProvider>
    </BrowserRouter>
  </StrictMode>
);
