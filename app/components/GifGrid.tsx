'use client';
import type { Gif } from '../lib/giphy.types';
import GifItem from './GifItem';

interface GifGridProps {
  gifs: Gif[];
}

export default function GifGrid({ gifs }: GifGridProps) {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}