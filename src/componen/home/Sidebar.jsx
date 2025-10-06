import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const { setSelectedId } = useWatch();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const API_KEY =
    import.meta.env.VITE_TMDB_API_KEY || process.env.REACT_APP_TMDB_API_KEY;

  // Search otomatis setiap kali `query` berubah
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await res.json();
        setResults(data.results || []);
        setShowResults(true);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    // Delay 300ms untuk mencegah spam request saat ngetik cepat
    const timer = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(timer);
  }, [query, API_KEY]);

  const handleSelectMovie = (movie) => {
    setSelectedId(movie.id);
    setQuery(""); // reset input
    setShowResults(false); // tutup hasil
    navigate(`/watch/${movie.id}`);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-second2 text-white p-4 box-border overflow-hidden transform ${
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
          <li
            className="py-2 text-lg w-full cursor-pointer hover:text-red-300"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="py-2 text-lg w-full cursor-pointer hover:text-red-300"
            onClick={() => navigate("upcoming")}
          >
            Up Comming
          </li>
          <li
            className="py-2 text-lg w-full cursor-pointer hover:text-red-300"
            onClick={() => navigate("popular")}
          >
            <a href="">Popular</a>
          </li>
          <li
            className="py-2 text-lg w-full cursor-pointer hover:text-red-300"
            onClick={() => navigate("toprated")}
          >
            <a href="">Top Rated</a>
          </li>
        </ul>
        <div className="mt-4 w-full">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // className="px-2 py-1 mt-4 rounded border-1 focus:outline-none border-black bg-white text-black
            className="px-2 py-1   rounded  border-1 focus:outline-none border-black bg-white text-black "
          />
        </div>
        {/* Hasil Search */}
        {showResults && results.length > 0 && (
          <ul className="mt-2 max-h-60 overflow-y-auto bg-white text-black rounded shadow-md">
            {results.slice(0, 5).map((movie) => (
              <li
                key={movie.id}
                onClick={() => handleSelectMovie(movie)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer text-sm"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w45${movie.poster_path}`
                      : "https://via.placeholder.com/45x68?text=N/A"
                  }
                  alt={movie.title}
                  className="w-8 h-auto rounded"
                />
                <span>{movie.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Sidebar;
