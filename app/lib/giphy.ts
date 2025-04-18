import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

if (!API_KEY) {
  throw new Error('Giphy API key is not defined. Please set NEXT_PUBLIC_GIPHY_API_KEY in your environment variables.');
}

export async function fetchGifs(query: string, lang = 'en'): Promise<Gif[]> {
  const { data } = await axios.get(BASE_URL, {
    params: { api_key: API_KEY, q: query, limit: 10, lang },
  });
  console.log('Giphy API response:', data.data);
  return data.data;
}
