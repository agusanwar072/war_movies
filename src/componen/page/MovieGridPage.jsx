// src/pages/MovieGridPage.jsx
import React, { useEffect, useState } from "react";
import Grid from "../sections/Grid";
import LoadingScreen from "../sections/LoadingScreen";
import { useTailwindBreakpoint } from "../hooks/useTailwindBreakpoint";
import { useLoading } from "../contexts/LoadingContext";
import { useNavigate } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";

const MovieGridPage = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const { setLoading, loading } = useLoading();
  const { setSelectedId } = useWatch();
  const breakpoint = useTailwindBreakpoint();
  const navigate = useNavigate();

  const API_KEY =
    import.meta.env.VITE_TMDB_API_KEY || process.env.REACT_APP_TMDB_API_KEY;

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
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
        );
        const json = await res.json();
        setData(json.results || []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchMovies();
  }, [endpoint, API_KEY]);

  const handleClickItem = (id) => {
    setSelectedId(id);
    navigate(`/watch/${id}`);
  };

  if (loading) return <LoadingScreen />;

  return <Grid items={data} limit={limit()} onClickItem={handleClickItem} />;
};

export default MovieGridPage;
