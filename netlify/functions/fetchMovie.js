export async function handler(event) {
  const API_KEY = process.env.VITE_TMDB_API_KEY;
  const { endpoint = "discover/movie" } = event.queryStringParameters;

  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movies" }),
    };
  }
}
