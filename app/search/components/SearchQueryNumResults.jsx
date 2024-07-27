'use client';
import React, { useState } from 'react';

const SearchQueryNumResults = () => {
  const [searchQuery, setSearchQuery] = useState('temp search query');
  const [numResults, setNumResults] = useState(93786);
  return (
    <div className="flex sm:items-center justify-center md:justify-start">
      <div className="grid md:grid-cols-2 items-baseline text-left">
        <p className="font-bold text-xl pr-2">"{searchQuery}"</p>
        <p className="text-muted-foreground text-sm">({numResults} results)</p>
      </div>
    </div>
  );
};

export default SearchQueryNumResults;
