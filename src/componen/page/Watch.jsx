import React from "react";
import { useParams } from "react-router-dom";
import { useWatch } from "../contexts/WatchContext";
import { useState, useEffect } from "react";
import Notfound from "../sections/Notfound";
import LoadingScreen from "../sections/LoadingScreen";

const Watch = () => {
  const { id } = useParams(); // ambil id dari URL
  const { selectedId } = useWatch();
  // tentukan id mana yang dipakai: context atau URL
  const watchId = selectedId || (id ? parseInt(id) : null);

  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // <-- tambahan
  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 32 32"
      className="w-8 h-8"
    >
      <path
        fill="#FCD53F"
        d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"
      />
    </svg>
  );

  // Ambil API KEY dari .env
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  console.log("API KEY:", import.meta.env.VITE_TMDB_API_KEY);

  // 🧠 Gunakan useEffect hanya bergantung pada watchId
  useEffect(() => {
    if (!watchId) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading(true);

        // Fetch detail + video bersamaan
        const [detailsRes, videosRes] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${watchId}?api_key=${API_KEY}`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${watchId}/videos?api_key=${API_KEY}`
          ),
        ]);

        if (!detailsRes.ok || !videosRes.ok) throw new Error("Failed to fetch");

        const detailsData = await detailsRes.json();
        const videosData = await videosRes.json();

        // Ambil trailer dari YouTube
        const trailer = videosData.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        const movie = {
          id: detailsData.id,
          title: detailsData.title,
          descrip: detailsData.overview,
          release: detailsData.release_date,
          popularity: detailsData.popularity,
          production: detailsData.production_companies
            ?.map((p) => p.name)
            .join(", "),
          genres: detailsData.genres?.map((g) => g.name),
          rating: detailsData.vote_average,
          videoKey: trailer?.key || null,
        };

        setItem(movie);
        setError(false);
      } catch (err) {
        console.error("Fetch movie error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [watchId]); // ✅ hanya tergantung pada watchId

  if (loading) return <LoadingScreen />;
  if (error) return <Notfound />;
  if (!item) return null;

  return (
    <div>
      <div className="w-full md:max-w-3xl lg:max-w-7xl   flex flex-col ">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={
              item.videoKey
                ? `https://www.youtube.com/embed/${item.videoKey}?rel=0`
                : ""
            }
            title={item.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-left mt-6">
          <h1 className="text-4xl ">{item.title}</h1>
          <div className="flex mt-2  items-center">
            {starIcon}
            <p className="text-xl ml-1">{item.rating}</p>
          </div>
          <p className="text-lg mt-1  ">popularity :{item.popularity}</p>
          <hr className="border-2 mt-1 border-white" />
          <div className="mt-1 ">
            <p className="text-lg  ">Genre </p>
            <ul className="flex flex-wrap gap-2 ml-5 py-2">
              {item.genres?.map((genre, index) => (
                <li
                  key={index}
                  className="border border-teal-400 bg-teal-400 rounded-md px-3 py-1 text-sm text-white"
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg mt-1 ">Realease : {item.release}</p>
          <p className="text-lg mt-1 ">Production : {item.production}</p>
          <p className="text-lg mt-1 ">Overview : {item.descrip}</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
