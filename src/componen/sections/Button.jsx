import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
