import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Watch from "./Watch";
import { useTailwindBreakpoint } from "../hooks/useTailwindBreakpoint";
import MovieGridPage from "./MovieGridPage";

const Content = () => {
  const breakpoint = useTailwindBreakpoint();

  const limit = () => {
    switch (breakpoint) {
      case "2xl":
        return 18;
      case "xl":
        return 12;
      default:
        return 9;
    }
  };

  return (
    <main className="flex-grow  pt-4 pb-8 sm:px-10  md:px-20 lg:px-30 ">
      <Routes>
        <Route path="/" element={<MovieGridPage endpoint="discover/movie" />} />
        <Route
          path="/popular"
          element={<MovieGridPage endpoint="movie/popular" />}
        />
        <Route
          path="/upcoming"
          element={<MovieGridPage endpoint="movie/upcoming" />}
        />
        <Route
          path="/toprated"
          element={<MovieGridPage endpoint="movie/top_rated" />}
        />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </main>
  );
};

export default Content;
