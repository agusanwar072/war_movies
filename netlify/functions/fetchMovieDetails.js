export async function handler(event) {
  const API_KEY = process.env.VITE_TMDB_API_KEY;
  const { id } = event.queryStringParameters;

  if (!id) {
    return { statusCode: 400, body: JSON.stringify({ error: "ID missing" }) };
  }

  try {
    const [detailsRes, videosRes] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
      ),
    ]);

    const detailsData = await detailsRes.json();
    const videosData = await videosRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ details: detailsData, videos: videosData }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movie details" }),
    };
  }
}
