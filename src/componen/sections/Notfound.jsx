import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <h1 className="text-4xl mb-2 ">Error NotFound 404...</h1>
      {/* <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-orange text-white rounded cursor-pointer border-2 border-orange hover:border-white  hover:bg-white hover:text-orange "
      >
        Kembali Ke Home
      </button> */}
      <button onClick={() => navigate("/")} className="btn btn-error">
        {" "}
        Kembali Ke Home
      </button>
    </div>
  );
};

export default Notfound;
