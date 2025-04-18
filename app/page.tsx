'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import {fetchGifs} from './lib/giphy';
import { Gif } from './lib/giphy.types';

export default function Home() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang , setLang] = useState('en');

  const onSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    setGifs([]);

    try {
      const response = await fetchGifs(query, lang);
     
      setGifs(response)
    } catch  {
      setError('Failed to fetch gifs');
    } finally {
      setLoading(false);
    }
  }

  return(
    <main>
      <h1>GIF Search</h1>
      <SearchBar onSearch={onSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {gifs.length > 0 && (
        <div>
          {gifs.map(gif => (
          
            <img key={gif.id} src={gif.images.preview_gif.url} alt={gif.alt_text} />
          ))}
        </div>
      )}
    </main>
  )
}

