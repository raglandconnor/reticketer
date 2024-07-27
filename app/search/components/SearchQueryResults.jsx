'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let displayResults = false;
const SearchQueryResults = () => {
  const [eventName, setEventName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [date, setDate] = useState('');
  const [filteredTickets, setFilteredTickets] = useState([]);

  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getTickets');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  // useEffect(()=>{
  //   axios.get('http:localhost:3001/getTickets')
  //   .then(tickets=> setTickets(tickets.data))
  //   .catch(err => console.log(err))
  // })
  const eventChange = (event) => {
    setEventName(event.target.value);
    console.log('here is the input ', event.target.value);
  };
  const locationChange = (event) => {
    setLocationName(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const click = () => {
    const query = {};
    displayResults = false;
    if (eventName) query.event = eventName.trim();
    console.log(query.event, 'query event ');
    if (locationName) query.location = locationName;
    console.log(query.location, 'query location ');
    if (date) query.date = date;

    fetchTickets();
    if (Object.keys(query).length === 0) {
      setFilteredTickets(tickets);
    } else {
      const newFilteredTickets = tickets.filter((ticket) => {
        let isMatch = true;
        for (const key in query) {
          if (
            query[key] &&
            ticket[key] &&
            !ticket[key]
              .toString()
              .toLowerCase()
              .includes(query[key].toLowerCase())
          ) {
            isMatch = false;
            break;
          }
        }
        return isMatch;
      });

      setFilteredTickets(newFilteredTickets);
    }

    displayResults = true;
  };

  const [searchQuery, setSearchQuery] = useState('temp search query');
  const [numResults, setNumResults] = useState(93786);

  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-7 gap-4 items-center">
        <input
          onChange={eventChange}
          value={eventName}
          className="md:col-span-2 border-2 border-black rounded p-2"
          placeholder="Enter event name"
        />
        <input
          onChange={locationChange}
          value={locationName}
          className="md:col-span-2 border-2 border-black rounded p-2"
          placeholder="Enter location"
        />
        <input
          onChange={dateChange}
          value={date}
          className="md:col-span-2 border-2 border-black rounded p-2"
          placeholder="Enter date (YYYY-MM-DD)"
        />
        <button
          onClick={click}
          className="border-2 border-black bg-gray-100 rounded p-2"
        >
          Search
        </button>
      </div>

      {displayResults && (
        <div className="mt-4">
          <p className="font-bold text-xl">{searchQuery}</p>
          <p className="text-muted-foreground text-sm">
            ({numResults} results)
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchQueryResults;
