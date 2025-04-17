import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/';

export async function fetchGifs(query, lang = 'en') {
  const { data } = await axios.get(BASE_URL, {
    params: { api_key: API_KEY, q: query, limit: 10, lang },
  });
  return data.data;
}
