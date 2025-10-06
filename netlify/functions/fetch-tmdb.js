// netlify/functions/fetch-tmdb.js

export async function handler(event) {
  const API_KEY = process.env.VITE_TMDB_API_KEY; // 🔒 ambil dari Environment Variables Netlify

  const { endpoint, query } = event.queryStringParameters;

  if (!endpoint) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing endpoint parameter" }),
    };
  }

  // 🔗 Bangun URL untuk TMDB
  let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`;
  if (query) url += `&query=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("TMDB Fetch Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
}
