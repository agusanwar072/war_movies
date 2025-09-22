import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const { selectedId } = useWatch();
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
            <a href="" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">Up Coming</a>
          </li>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">Popular</a>
          </li>
          <li className="py-2 text-lg w-full cursor-pointer hover:text-red-300">
            <a href="">Top Rated</a>
          </li>
        </ul>
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1   rounded  border-1 focus:outline-none border-black bg-white text-black "
        />
      </div>
    </>
  );
};

export default Sidebar;
