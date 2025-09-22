import React from "react";

const Overlay = ({ sidebarOpen, closeSidebar }) => {
  if (!sidebarOpen) return null; // 🔹 overlay hanya muncul kalau sidebar terbuka
  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={closeSidebar} // klik overlay → tutup sidebar
      ></div>
    </>
  );
};

export default Overlay;
