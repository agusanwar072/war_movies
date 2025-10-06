// netlify/functions/fetchMovie.js
export async function handler(event) {
  const params = event.queryStringParameters || {};
  const { endpoint, id, type, query, rawQuery } = params;

  const API_KEY = process.env.VITE_TMDB_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing API key on server" }),
    };
  }

  try {
    let url = "";

    if (endpoint) {
      // endpoint example: "discover/movie" or "movie/popular"
      // rawQuery can be "page=2&region=ID" if you need extra params
      const extra = rawQuery ? `&${rawQuery}` : "";
      url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}${extra}`;
    } else if (id) {
      if (type === "videos") {
        url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
      }
    } else if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`;
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No endpoint / id / query provided" }),
      };
    }

    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: res.ok ? 200 : res.status,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
