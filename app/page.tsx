'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import {fetchGifs} from './lib/giphy';
import { Gif } from './lib/giphy.types';
import LanguageSelector from './components/LanguageSelector';
import GifGrid from './components/GifGrid';

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
    <main className='container'>
  
      <h1>GIF Search</h1>
      <div className="controls">
        <SearchBar onSearch={onSearch} />
        <LanguageSelector lang={lang} onLanguageChange={setLang} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
       {gifs.length > 0 && (
        <GifGrid gifs={gifs} />
      )}
    </main>
  )
}

