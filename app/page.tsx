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
      setError('Failed to fetch the gifs');
    } finally {
      setLoading(false);
    }
  }

  
  return(
    <main className='container'>
  
      <h1>Pixel Parade</h1>
      <p className="page-description">
        Discover and share the best GIFs to express every emotion!
      </p>

      <div className="controls">
        <SearchBar onSearch={onSearch} />
        <LanguageSelector lang={lang} onLanguageChange={setLang} />
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-2xl">Loading...</p>}

      {/* Error */}
       {error && <p className='text-center text-xl'>
          Oops! Something went wrong:
          <br />
          <span className="error">{error}</span> 
        </p>}

       {/* GIFs */}
       {gifs.length > 0 && (
        <GifGrid gifs={gifs} />
      )}

      {/* Empty State */}
      {!gifs.length && !loading && !error && (
        <p className="text-center text-2xl" >
          What are you in the mood for today? 
          <br />
          Enter a search term above and let the GIFs do the talking!
        </p>
      )}
    </main>
  )
}

