import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { WatchProvider } from "./componen/contexts/WatchContext.jsx";
import { LoadingProvider } from "./componen/contexts/LoadingContext.jsx";
import LoadingScreen from "./componen/sections/LoadingScreen.jsx";

// 🔍 Tambahkan ini di sini
console.log("🌍 ENV keys:", Object.keys(import.meta.env));
console.log(
  "🔑 TMDB KEY loaded?",
  import.meta.env.VITE_TMDB_API_KEY ? "✅ yes" : "❌ no"
);

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
