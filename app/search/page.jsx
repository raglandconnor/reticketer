'use client';
import React from 'react';
import SearchQueryResults from './components/SearchQueryResults';
import { EventListingCard } from './components/EventListingCard';
import dummyData from '../api/items/dummy_data.js';
import Link from 'next/link';

const Search = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

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

  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <section className="w-full border-b-2 pb-8">
          <SearchQueryResults />
        </section>
        <section>
          <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
            {listingsElements}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;
