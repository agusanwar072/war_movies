import React from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 `}
      >
        <button
          className="mb-4 text-lg w-full cursor-pointer hover:text-red-300"
          onClick={closeSidebar}
        >
          Close
        </button>
        <ul>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">Home</a>
          </li>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">About</a>
          </li>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
