import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "../sections/Grid";
import Watch from "./Watch";
import { useWatch } from "../contexts/WatchContext";
import { useLoading } from "../contexts/LoadingContext";
import LoadingScreen from "../sections/LoadingScreen";
import { useTailwindBreakpoint } from "../hooks/useTailwindBreakpoint";
import MovieGridPage from "./MovieGridPage";

const Content = () => {
  const breakpoint = useTailwindBreakpoint();
  const { loading, setLoading } = useLoading();
  const [data, setData] = useState([]);
  const location = useLocation(); // 👉 cek perubahan route
  const navigate = useNavigate();
  const { setSelectedId } = useWatch();

  // Ambil API KEY dari .env
  const API_KEY =
    import.meta.env.VITE_TMDB_API_KEY || process.env.REACT_APP_TMDB_API_KEY;

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=`;

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

  useEffect(() => {
    setLoading(true); // nyalain loading

    const fetchMovies = async () => {
      try {
        const res = await fetch(`${URL}${API_KEY}`);
        console.log("Response status:", res.status); // cek status

        const dataa = await res.json();
        console.log("API data:", dataa); // cek isi data

        setData(dataa.results || []);
      } catch (error) {
        console.error(" error fetching data movies:", error);
      } finally {
        console.log("Finally block executed"); // cek finally

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchMovies();
  }, [API_KEY]);

  const handleClickItem = (id) => {
    setSelectedId(id);
    navigate(`/watch/${id}`);
    console.log(id);
  };
  if (loading) return <LoadingScreen />;

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
