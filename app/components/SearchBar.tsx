'use client';

import { useState, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}


export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState('');


const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) onSearch(trimmedQuery);
    
    setQuery(''); 
}

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for gifs..."
                aria-label='Search for gifs'
            />
            <button type="submit">Search</button>
        </form>
    )

}