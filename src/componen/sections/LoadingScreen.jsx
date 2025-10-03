import React from "react";
import { useLoading } from "../contexts/LoadingContext";

const LoadingScreen = () => {
  const { loading } = useLoading();

  if (!loading) return null; // kalau false, tidak render apa-apa

  return (
    <div className="flex justify-center items-center">
      <div>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
