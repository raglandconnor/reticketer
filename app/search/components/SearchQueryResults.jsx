'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { dummyData } from '@/app/api/items/dummy_data';
import { EventListingCard } from './EventListingCard';
import { Button } from '@/components/ui/button';

let displayResults = false;

const SearchQueryResults = ({ setListingsElements, setIsSearching }) => {
  const [eventName, setEventName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [date, setDate] = useState('');
  const [filteredTickets, setFilteredTickets] = useState([]);

  const [tickets, setTickets] = useState(dummyData);

  const eventChange = (event) => {
    setEventName(event.target.value);
    console.log('Event name input: ', event.target.value);
  };

  const locationChange = (event) => {
    setLocationName(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const onSearchClick = () => {
    setIsSearching(false);
    setIsSearching(true);

    const query = {};
    displayResults = false;
    if (eventName) query.title = eventName.trim();
    if (locationName) query.location = locationName.trim();
    if (date) query.date = date.trim();

    if (Object.keys(query).length === 0) {
      setFilteredTickets(tickets);
    } else {
      const newFilteredTickets = tickets.filter((ticket) => {
        let isMatch = true;

        if (
          query.title &&
          !ticket.title.toLowerCase().includes(query.title.toLowerCase())
        ) {
          isMatch = false;
        }

        if (
          query.location &&
          !`${ticket.location.city}, ${ticket.location.state}`
            .toLowerCase()
            .includes(query.location.toLowerCase())
        ) {
          isMatch = false;
        }

        if (query.date && ticket.date !== query.date) {
          isMatch = false;
        }

        return isMatch;
      });

      setFilteredTickets(newFilteredTickets);
    }

    displayResults = true;

    setEventName('');
    setLocationName('');
    setDate('');
  };

  const onUndoSearchClick = () => {
    setIsSearching(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  useEffect(() => {
    const listingsElements = filteredTickets.map((listing) => {
      const locationString = `${listing.location.city}, ${listing.location.state}`;

      return (
        <Link href={`listings/${listing.id}`} key={listing.id}>
          <EventListingCard
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
  }, [filteredTickets]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-3 gap-4 items-center">
        <input
          onChange={eventChange}
          value={eventName}
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Enter event name"
        />
        <input
          onChange={locationChange}
          value={locationName}
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Enter location"
        />
        <input
          onChange={dateChange}
          value={date}
          className="border-2 border-gray-300 rounded p-2"
          placeholder="Enter date (YYYY-MM-DD)"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 items-center mt-4">
        <button
          onClick={onSearchClick}
          className="border-2 text-white bg-black rounded-xl p-2 px-4 opacity-35 hover:opacity-40"
        >
          Search
        </button>
        <button
          onClick={onUndoSearchClick}
          className="border-2 text-white bg-black rounded-xl p-2 px-4 opacity-35 hover:opacity-40"
        >
          Undo Search
        </button>
      </div>
      {/* {displayResults && (
        <section>
          <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
            {listingsElements}
          </div>
        </section>
      )} */}
    </div>
  );
};

export default SearchQueryResults;
