import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "./componen/home/Navbar";
import Sidebar from "./componen/home/Sidebar";
import Overlay from "./componen/home/Overlay";
import Footer from "./componen/home/Footer";
import Content from "./componen/page/Cgitontent";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // state sidebar nilai awal false

  return (
    <div className="flex flex-col min-h-screen bg-main font-poppins text-white">
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
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
