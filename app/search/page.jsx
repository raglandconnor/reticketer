'use client';
import React, { useState, useEffect } from 'react';
import SearchQueryResults from './components/SearchQueryResults';
import { EventListingCard } from './components/EventListingCard';
import { dummyData } from '../api/items/dummy_data';
import Link from 'next/link';

const Search = () => {
  const [listingsElements, setListingsElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setGridElements();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isSearching) {
      setGridElements();
    }
  }, [isSearching]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const setGridElements = () => {
    const listingsElements = dummyData.map((listing, index) => {
      const locationString = `${listing.location.city}, ${listing.location.state}`;

      return (
        <Link href={`listings/${listing.id}`}>
          <EventListingCard
            key={listing.id}
            seller={listing.name}
            title={listing.title}
            date={formatDate(listing.date)}
            location={locationString}
            price={listing.money}
          />
        </Link>
      );
    });

    setListingsElements(listingsElements);
  };

  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <section className="w-full border-b-2 pb-8">
          <SearchQueryResults
            setListingsElements={setListingsElements}
            setIsSearching={setIsSearching}
          />
        </section>
        <section>
          {isLoading && (
            <div className="flex items-center justify-center mt-64 text-muted-foreground">
              Loading...
            </div>
          )}
          {!isLoading && (
            <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              {listingsElements}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Search;
