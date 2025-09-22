import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componen/home/Navbar";
import Sidebar from "./componen/home/Sidebar";
import Overlay from "./componen/home/Overlay";
import Footer from "./componen/home/Footer";
import Content from "./componen/page/Content";
import Watch from "./componen/page/Watch";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // state sidebar nilai awal false

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {/* Navbar kita kirim fungsi toggleSidebar sebagai props */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* 🔹 Sidebar membaca state sidebarOpen dari props */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* 🔹 Overlay muncul hanya kalau sidebarOpen = true */}
      <Overlay
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* 🔹 Halaman berganti sesuai route */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
