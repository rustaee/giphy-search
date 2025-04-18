'use client';
import type { Gif } from '../lib/giphy.types';

interface GifItemProps {
  gif: Gif;
}

export default function GifItem({ gif }: GifItemProps) {
  return (
    <div className="gif-item">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.alt_text || 'GIF'}
        loading="lazy"
        className="gif-image"
      />


    </div>
  );
}
