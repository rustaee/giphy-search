'use client';

import { useState } from 'react';

export default function Home() {
  const [gifs, setGifs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang , setLang] = useState('en');
}

