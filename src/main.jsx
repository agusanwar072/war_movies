import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { WatchProvider } from "./componen/contexts/WatchContext.jsx";
import { LoadingProvider } from "./componen/contexts/LoadingContext.jsx";
import LoadingScreen from "./componen/sections/LoadingScreen.jsx";

// 🔍 Tambahkan ini di sini
console.log("🌍 ENV from Netlify:", import.meta.env);
console.log("🔑 TMDB KEY:", import.meta.env.VITE_TMDB_API_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <WatchProvider>
          <App />
        </WatchProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>
);
