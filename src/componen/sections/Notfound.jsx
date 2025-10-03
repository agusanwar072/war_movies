import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <h1 className="text-4xl mb-2 ">Error NotFound 404...</h1>

      <button onClick={() => navigate("/")} className="btn btn-error">
        {" "}
        Kembali Ke Home
      </button>
    </div>
  );
};

export default Notfound;
